'use client';

import { useSearchParams } from 'next/navigation';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { lsGetTableInfo, lsTableKey } from '../../localStorage/table';
import useCategories, { Categories } from '../hooks/useCategories';

export type IAppContext = {
  table: { id: number; time: number } | null;
  categories: { value: Categories['value']; loading: Categories['loading'] };
};

interface IAppContextDispatch {
  setTable: Dispatch<
    SetStateAction<{
      id: number;
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

  useEffect(() => {
    setTable(lsGetTableInfo());
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
