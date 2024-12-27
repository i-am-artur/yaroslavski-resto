'use client';
import { useAppContext } from '../../../../../src/app/context/AppContext';
import { css, cx } from '../../../../../styled-system/css';
import { stack } from '../../../../../styled-system/recipes';
import Select from './select/Categories';

export default function Categories() {
  const appCtx = useAppContext();

  return <Select categories={appCtx?.categories.value ?? []} />;
}
