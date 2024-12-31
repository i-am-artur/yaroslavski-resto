'use client';

import { useSearchParams } from 'next/navigation';
import { useMenuContextDispatch } from './Context';
import { useEffect } from 'react';

export default function SearchParams() {
  const searchParams = useSearchParams();
  const menuCtxDispatch = useMenuContextDispatch();

  useEffect(() => {
    const cat1 = (() => {
      const cat1Param = searchParams.get('cat1') ?? '2';
      const cat1Number = parseInt(cat1Param);
      return isNaN(cat1Number) ? 2 : cat1Number;
    })();

    menuCtxDispatch?.setAppSearchParams({ value: searchParams, cat1 });
  }, [searchParams]);

  return '';
}
