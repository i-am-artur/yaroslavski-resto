'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

export type IContext = {
  products: any[];
  appSearchParams: any;
};

interface IContextDispatch {
  setProducts: Dispatch<SetStateAction<any[]>>;
  setAppSearchParams: Dispatch<SetStateAction<object | null>>;
}

const context = createContext<IContext | null>(null);
const contextDispatch = createContext<IContextDispatch | null>(null);

export const useMenuContext = () => useContext(context);
export const useMenuContextDispatch = () => useContext(contextDispatch);

export default function MenuContext({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [products, setProducts] = useState<IContext['products']>([]);
  const [appSearchParams, setAppSearchParams] =
    useState<IContext['appSearchParams']>(null);

  return (
    <context.Provider
      value={{
        products,
        appSearchParams,
      }}
    >
      <contextDispatch.Provider value={{ setProducts, setAppSearchParams }}>
        {children}
      </contextDispatch.Provider>
    </context.Provider>
  );
}
