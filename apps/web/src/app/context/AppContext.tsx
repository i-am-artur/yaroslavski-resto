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
import {
  lsDeleteIsDeliveryInfo,
  lsGetIsDeliveryInfo,
} from '../../localStorage/isDelivery';

export type IAppContext = {
  table: { id: number; name: string; time: number } | null;
  categories: { value: Categories['value']; loading: Categories['loading'] };
  delivery: { isDelivery: boolean; time: number } | null;
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
  setDelivery: Dispatch<
    SetStateAction<{
      isDelivery: boolean;
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
  const [delivery, setDelivery] = useState<IAppContext['delivery']>(null);
  const categories = useCategories();

  useEffect(() => {
    const lsTableInfo = lsGetTableInfo();
    if (lsTableInfo) {
      const hoursMoreThanAllowed =
        new Date().getTime() - lsTableInfo.time > 24 * 60 * 60 * 1000;
      if (hoursMoreThanAllowed) {
        setTable(null);
        lsDeleteTableInfo();
      } else {
        setTable(lsTableInfo);
        // lsDeleteIsDeliveryInfo();
      }
      const isLongTime =
        new Date().getTime() - lsTableInfo.time > 7 * 24 * 60 * 60 * 1000;
    }
    const lsDeliveryInfo = lsGetIsDeliveryInfo();
    if (lsDeliveryInfo?.isDelivery) {
      setDelivery(lsDeliveryInfo);
      // lsDeleteTableInfo();
      const isLongTime =
        new Date().getTime() - lsDeliveryInfo.time > 7 * 24 * 60 * 60 * 1000;
    } else {
      lsDeleteIsDeliveryInfo();
    }
  }, []);

  return (
    <appContext.Provider
      value={{
        table,
        categories: {
          value: categories.value.filter((cat) =>
            delivery?.isDelivery ? cat.delivery : true
          ),
          loading: categories.loading,
        },
        delivery: delivery,
      }}
    >
      <appContextDispatch.Provider
        value={{
          setTable,
          setCategories: categories.setValue,
          setDelivery,
        }}
      >
        {children}
      </appContextDispatch.Provider>
    </appContext.Provider>
  );
}
