'use client';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { ReactNode, createContext } from 'react';
import { QrIndexT } from '../../../../../src/instances/languages/translation/qr/index/ua';

interface IContext {
  t: QrIndexT;
  searchParams: ReadonlyURLSearchParams;
}

export const pageContext = createContext({} as IContext);

export default function PageContext(props: {
  t: QrIndexT;
  children: ReactNode | ReactNode[];
}) {
  const searchParams = useSearchParams();

  return (
    <pageContext.Provider
      value={{ t: props.t, searchParams }}
      // value={{ selectedCategories, setSelectedCategories, t: props.t }}
    >
      {props.children}
    </pageContext.Provider>
  );
}
