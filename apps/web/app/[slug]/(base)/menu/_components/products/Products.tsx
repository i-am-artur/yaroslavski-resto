'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useAppContext } from '../../../../../../src/app/context/AppContext';

export default function Products() {
  const searchParams = useSearchParams();
  const cat1 = searchParams.get('cat1') ?? '2';
  const appCtx = useAppContext();

  useEffect(() => {
    (async () => {
      const products: any[] = await fetch(
        `${process.env.basePath}/assets/menuData/${cat1}.json`
      ).then((res) => res.json());
      console.log('🚀 ~ file: Products.tsx:13 ~ products:', products);

      const category = appCtx?.categories.value.find((el) => el.id === cat1);
      console.log('🚀 ~ file: Products.tsx:20 ~ category:', category);
    })();
  }, [cat1]);

  return 'hj';
}
