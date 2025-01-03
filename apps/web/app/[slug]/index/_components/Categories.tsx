'use client';
import { useAppContext } from '../../../../src/app/context/AppContext';
import { css, cx } from '../../../../styled-system/css';
import { card, stack } from '../../../../styled-system/recipes';
import Category from './Category';

export default function Categories() {
  const appCtx = useAppContext();

  return (
    <ul className={cx(card(), stack({ rGap: 'unit' }))}>
      {appCtx?.categories.value
        .filter((catToFilter) => catToFilter.parentId === null)
        .map((category: any) => {
          return <Category key={category.id} category={category} />;
        })}
    </ul>
  );
}
