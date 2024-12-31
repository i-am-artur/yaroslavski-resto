'use client';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  Suspense,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

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
  const lsCartItems = (() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems') as string)
        : [];
    }
    return [];
  })();
  const [cartItems, setCartItems] = useState<any[]>(lsCartItems);

  useEffect(() => {
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <cartContext.Provider value={{ cartItems }}>
      <cartDispatchContext.Provider value={{ setCartItems }}>
        {props.children}
      </cartDispatchContext.Provider>
    </cartContext.Provider>
  );
}
