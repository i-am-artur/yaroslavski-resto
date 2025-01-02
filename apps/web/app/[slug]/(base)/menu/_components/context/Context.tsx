'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  Suspense,
  useContext,
  useState,
} from 'react';
import SearchParams from '../SearchParams';
import Loading from '../../../../../../src/ui/loading/Loading';
import useStructuredData from './useStructuredData';

export type IContext = {
  products: any[];
  appSearchParams: any;
  structuredData: any[];
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
  const structuredData = useStructuredData({ cat1: appSearchParams?.cat1 });

  return (
    <context.Provider
      value={{
        products,
        appSearchParams,
        structuredData: structuredData,
      }}
    >
      <contextDispatch.Provider value={{ setProducts, setAppSearchParams }}>
        <Suspense fallback={<Loading />}>
          <SearchParams />
        </Suspense>
        {children}
      </contextDispatch.Provider>
    </context.Provider>
  );
}
