import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { qrContext } from '../../app/[slug]/qr/(components)/QrContext';

export default function useTable() {
  const searchParams = useSearchParams();
  const tbl = searchParams.get('tbl');
  const [table, setTable] = useState<any>(null);
  const qrCtx = useContext(qrContext);

  useEffect(() => {
    (async () => {
      setTable(qrCtx.tables.find((t: any) => t.id === parseInt(tbl ?? ''))?.name ?? '');
    })();
  }, [searchParams, qrCtx.tables]);

  return {
    table,
  };
}
