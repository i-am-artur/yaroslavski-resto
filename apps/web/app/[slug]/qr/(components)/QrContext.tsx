'use client';
import { ReactNode, Suspense, createContext, useEffect, useState } from 'react';
import useCategories from '../../../../src/hooks/useCategories';
import AppSearchParams from './AppSearchParams';

interface IContext {
  categories: ReturnType<typeof useCategories>;
  lang: string;
  tables: any;
}

export const qrContext = createContext({} as IContext);

export default function QrContext(props: {
  lang: string;
  children: ReactNode | ReactNode[];
}) {
  const categories = useCategories();
  const [tables, setTables] = useState<any[]>([]);
  // const [appSearchParams, setAppSearchParams] = useState(null);
  // console.log(
  //   '🚀 ~ file: QrContext.tsx:21 ~ appSearchParams:',
  //   appSearchParams?.get('tbl')
  // );

  useEffect(() => {
    (async () => {
      fetch(`${process.env.basePath}/assets/tables.json`)
        .then((res) => res.json())
        .then((res) => setTables(res));
    })();
  }, []);

  return (
    <qrContext.Provider value={{ categories, lang: props.lang, tables }}>
      {props.children}
    </qrContext.Provider>
  );
}
