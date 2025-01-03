'use client';
import dynamic from 'next/dynamic';
import { useLayoutEffect, useState } from 'react';
import { useAppContext } from '../../../../../../../src/app/context/AppContext';
import { MenuT } from '../../../../../../../src/languages/translation/app/menu/ua';
import { css, cx } from '../../../../../../../styled-system/css';
import Categories from './Categories';
import { useMenuContext } from '../../context/Context';
import SubCategories from './subCategories/SubCategories';
import { stack } from '../../../../../../../styled-system/recipes';

const SelectMainCategories = dynamic(
  () => import('./mainCategories/SelectMainCategories')
);

export default function Select({ t }: { t: MenuT }) {
  const appCtx = useAppContext();
  const menuCtx = useMenuContext();
  const [showMainCategories, setShowMainCategories] = useState(false);
  const [yOffset, setYOffset] = useState(0);

  // useLayoutEffect(() => {
  //   const categoriesSelector = document.getElementById('categories-selector');

  //   if (categoriesSelector) {
  //     const y = categoriesSelector.getBoundingClientRect().top;
  //     console.log('🚀 ~ file: Select.tsx:27 ~ y:', y);

  //     // setYOffset(y);
  //   }
  //   const yOffset = 0;
  //   // const y = (categoryEl?.getBoundingClientRect()?.top ?? 0) + window.scrollY + yOffset;
  // });
  return (
    <div
      id='categories-selector'
      className={cx(
        stack({ rGap: 'unit' }),
        css({
          padding: '{spacing.side.v} 0',
          top: '-1',
          position: 'sticky',
          backgroundColor: 'white',
          zIndex: '5',
        })
      )}
    >
      <select
        aria-label='Main category selection'
        className={css({
          width: '100%',
        })}
        value={menuCtx?.appSearchParams?.cat1}
        onChange={() => null}
        onClick={(e) => {
          e.preventDefault();
          e.currentTarget.blur();
          setShowMainCategories(true);
        }}
      >
        <Categories categories={appCtx?.categories.value ?? []} />
      </select>
      <SubCategories />

      {showMainCategories && (
        <SelectMainCategories
          open={showMainCategories}
          onSelect={() => setShowMainCategories(false)}
          categories={appCtx?.categories.value ?? []}
          t={t}
        />
      )}
    </div>
  );
}
