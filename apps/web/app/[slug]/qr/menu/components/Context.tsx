'use client';
import { ReactNode, createContext, useContext, useState } from 'react';
import { qrContext } from '../../(components)/QrContext';

interface IContext {
  filteredCategories: any[];
  setFilteredCategories: (arg: any) => void;
  lang: string;
}

export const menuContext = createContext({} as IContext);

export default function MenuContext(props: {
  lang: string;
  children: ReactNode | ReactNode[];
}) {
  const qrCtx = useContext(qrContext);
  const [filteredCategories, setFilteredCategories] = useState(qrCtx.categories.value);

  return (
    <menuContext.Provider
      value={{
        filteredCategories,
        setFilteredCategories,
        lang: props.lang,
      }}
    >
      {props.children}
    </menuContext.Provider>
  );
}
