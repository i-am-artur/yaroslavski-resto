'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import tables from '../../../public/assets/tables.json';
import { useAppContextDispatch } from '../../../src/app/context/AppContext';
import { lsSaveTableInfo } from '../../../src/localStorage/table';
import { lsSaveIsDeliveryInfo } from '../../../src/localStorage/isDelivery';

export default function ClientPage() {
  // lsDeleteTableInfo();
  const searchParams = useSearchParams();
  const router = useRouter();
  const appCtxDispatch = useAppContextDispatch();
  const tableId = (() => {
    const searchParamTableId = searchParams.get('tableId');
    const tableIdInt = parseInt(searchParamTableId ?? '');
    return isNaN(tableIdInt) ? null : tableIdInt;
  })();

  const tableName = tables.find((t: any) => t.id === tableId)?.name;

  const isDelivery = (() => {
    const searchParamIsDelivery = searchParams.get('isDelivery');
    const isDeliveryInt = parseInt(searchParamIsDelivery ?? '');
    return isNaN(isDeliveryInt) ? false : true;
  })();

  useEffect(() => {
    const table =
      !!tableName && !!tableId
        ? {
            id: tableId,
            name: tableName,
            time: new Date().getTime(),
          }
        : null;
    appCtxDispatch?.setTable(table);
    appCtxDispatch?.setDelivery({ isDelivery, time: new Date().getTime() });

    lsSaveTableInfo(table);
    lsSaveIsDeliveryInfo({ isDelivery });

    router.replace(`/ua/categories`);
  }, [tableId]);

  return <p></p>;
}
