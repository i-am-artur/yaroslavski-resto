'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useAppContextDispatch } from '../../../_instances/app/context/AppContext';
import {
  lsDeleteTableInfo,
  lsSaveTableInfo,
} from '../../../_instances/localStorage/table';

export default function ClientPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const appCtxDispatch = useAppContextDispatch();

  useEffect(() => {
    const tableId = (() => {
      const searchParamTableId = searchParams.get('tableId');
      const tableIdInt = parseInt(searchParamTableId ?? '');
      return isNaN(tableIdInt) ? null : tableIdInt;
    })();

    if (tableId) {
      const table = {
        id: tableId,
        time: new Date().getTime(),
      };
      appCtxDispatch?.setTable(table);
      lsSaveTableInfo(table);
    } else {
      lsDeleteTableInfo();
    }
    router.replace(`/ua/index`);
  }, []);

  return <p></p>;
}
