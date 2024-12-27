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

export type IAppContext = { table: { id: number; time: number } | null };

interface IAppContextDispatch {
  setTable: Dispatch<
    SetStateAction<{
      id: number;
      time: number;
    } | null>
  >;
}

const appContext = createContext<IAppContext | null>(null);
const appContextDispatch = createContext<IAppContextDispatch | null>(null);

export const useAppContext = () => useContext(appContext);
export const useAppContextDispatch = () => useContext(appContextDispatch);

export default function AppContext({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [table, setTable] = useState<IAppContext['table']>(null);

  useEffect(() => {
    setTable(lsGetTableInfo());
  }, []);

  return (
    <appContext.Provider
      value={{
        table,
      }}
    >
      <appContextDispatch.Provider value={{ setTable }}>
        {children}
      </appContextDispatch.Provider>
    </appContext.Provider>
  );
}
