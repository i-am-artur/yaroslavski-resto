'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { lsDeleteTableInfo, lsGetTableInfo } from '../../localStorage/table';
import useCategories, { Categories } from '../hooks/useCategories';

export type IAppContext = {
  table: { id: number; name: string; time: number } | null;
  categories: { value: Categories['value']; loading: Categories['loading'] };
};

interface IAppContextDispatch {
  setTable: Dispatch<
    SetStateAction<{
      id: number;
      name: string;
      time: number;
    } | null>
  >;
  setCategories: Categories['setValue'];
}

const appContext = createContext<IAppContext | null>(null);
const appContextDispatch = createContext<IAppContextDispatch | null>(null);

export const useAppContext = () => useContext(appContext);
export const useAppContextDispatch = () => useContext(appContextDispatch);

export default function AppContext({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [table, setTable] = useState<IAppContext['table']>(null);
  const categories = useCategories();

  // setTimeout(() => setTable(lsGetTableInfo()), 1000);
  useEffect(() => {
    // setTable(lsGetTableInfo());

    const onPageLoad = () => {
      const lsTableInfo = lsGetTableInfo();
      if (lsTableInfo) {
        // calculate if minutes difference from now and lsTableInfo.time is not more 210 minutes
        // const minutesMoreThanAllowed =
        //   new Date().getTime() - lsTableInfo.time > 1 * 60 * 1000;
        // console.log('🚀 ~ onPageLoad ~ minutesMoreThanAllowed:', minutesMoreThanAllowed);

        const hoursMoreThanAllowed =
          new Date().getTime() - lsTableInfo.time > 24 * 60 * 60 * 1000;
        if (hoursMoreThanAllowed) {
          setTable(null);
          lsDeleteTableInfo();
        } else {
          setTable(lsGetTableInfo());
        }
      }
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <appContext.Provider
      value={{
        table,
        categories: {
          value: categories.value,
          loading: categories.loading,
        },
      }}
    >
      <appContextDispatch.Provider
        value={{ setTable, setCategories: categories.setValue }}
      >
        {children}
      </appContextDispatch.Provider>
    </appContext.Provider>
  );
}
