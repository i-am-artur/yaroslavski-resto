'use client';
import { ReactNode, createContext } from 'react';
import useCategories from '../../../../src/hooks/useCategories';

interface IContext {
  categories: ReturnType<typeof useCategories>;
  lang: string;
}

export const qrContext = createContext({} as IContext);

export default function QrContext(props: {
  lang: string;
  children: ReactNode | ReactNode[];
}) {
  const categories = useCategories();

  return (
    <qrContext.Provider value={{ categories, lang: props.lang }}>
      {props.children}
    </qrContext.Provider>
  );
}
