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
import useCategories from '../../../../src/hooks/useCategories';

interface IContext {
  categories: ReturnType<typeof useCategories>;
  lang: string;
  tables: any;
}

interface ICart {
  cartItems: any[];
}

interface ICartActions {
  setCartItems: Dispatch<SetStateAction<any[]>>;
}
export const qrContext = createContext({} as IContext);
const CartContext = createContext({} as ICart);
const CartDispatchContext = createContext({} as ICartActions);

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

export default function QrContext(props: {
  lang: string;
  children: ReactNode | ReactNode[];
}) {
  const categories = useCategories();
  const [tables, setTables] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<any[]>(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems') as string)
      : []
  );
  console.log('🚀 ~ file: QrContext.tsx:46 ~ cartItems:', cartItems);

  useEffect(() => {
    (async () => {
      fetch(`${process.env.basePath}/assets/tables.json`)
        .then((res) => res.json())
        .then((res) => setTables(res));
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <qrContext.Provider value={{ categories, lang: props.lang, tables }}>
      <CartContext.Provider value={{ cartItems }}>
        <CartDispatchContext.Provider value={{ setCartItems }}>
          {props.children}
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </qrContext.Provider>
  );
}
