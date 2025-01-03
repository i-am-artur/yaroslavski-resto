'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect } from 'react';
import { useAppContextDispatch } from '../../../src/app/context/AppContext';
import { lsDeleteTableInfo, lsSaveTableInfo } from '../../../src/localStorage/table';
import tables from '../../../public/assets/tables.json';

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

  useEffect(() => {
    // if (!!tableName && !!tableId) {
    // const table = {
    //   id: tableId,
    //   name: tableName,
    //   time: new Date().getTime(),
    // };
    // appCtxDispatch?.setTable(table);
    // lsSaveTableInfo(table);
    // }
    const table =
      !!tableName && !!tableId
        ? {
            id: tableId,
            name: tableName,
            time: new Date().getTime(),
          }
        : null;
    appCtxDispatch?.setTable(table);
    lsSaveTableInfo(table);
    // }

    // else {
    //   lsDeleteTableInfo();
    // }

    router.replace(`/ua/index`);
    // setTimeout(() => router.replace(`/ua/index`), 1000);
  }, [tableId]);

  return <p></p>;
}
