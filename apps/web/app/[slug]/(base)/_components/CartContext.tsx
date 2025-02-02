'use client';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAppContext } from '../../../../src/app/context/AppContext';

interface ICart {
  cartItems: any[];
}

interface ICartActions {
  setCartItems: Dispatch<SetStateAction<any[]>>;
}
const cartContext = createContext({} as ICart);
const cartDispatchContext = createContext({} as ICartActions);

export function useCart() {
  return useContext(cartContext);
}

export function useCartDispatch() {
  return useContext(cartDispatchContext);
}

export default function CartContext(props: { children: ReactNode | ReactNode[] }) {
  const appCtx = useAppContext();
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartItemsKey = (() => {
        if (appCtx?.delivery?.isDelivery) return 'deliveryCartItems';
        if (appCtx?.table?.id) return 'qrCartItems';
        return '';
      })();

      if (cartItemsKey === '') return;

      const lsCartItems = localStorage.getItem(cartItemsKey);

      if (lsCartItems) {
        const parsedCartItems = JSON.parse(lsCartItems);

        const isLongTime =
          new Date().getTime() - parsedCartItems?.time > 7 * 24 * 60 * 60 * 1000;
        if (!isLongTime && parsedCartItems?.cartItems.length > 0) {
          setCartItems(parsedCartItems?.cartItems);
        }

        if (isLongTime) {
          return setCartItems([]);
        }
      }
    }
  }, [appCtx?.delivery?.isDelivery, appCtx?.table?.id]);

  useEffect(() => {
    const cartItemsKey = (() => {
      if (appCtx?.delivery?.isDelivery) return 'deliveryCartItems';
      if (appCtx?.table?.id) return 'qrCartItems';
      return '';
    })();

    if (cartItemsKey !== '') {
      window.localStorage.setItem(
        cartItemsKey,
        JSON.stringify({ cartItems, time: new Date().getTime() })
      );
    }
  }, [cartItems]);

  return (
    <cartContext.Provider value={{ cartItems }}>
      <cartDispatchContext.Provider value={{ setCartItems }}>
        {props.children}
      </cartDispatchContext.Provider>
    </cartContext.Provider>
  );
}
