'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useAppContext } from '../../../../../../../src/app/context/AppContext';
import { CatT } from '../../../../../../../src/languages/translation/app/menu/ua';
import { css } from '../../../../../../../styled-system/css';
import Categories from './Categories';

const MainCategories = dynamic(() => import('./mainCategories/MainCategories'));

export default function Select({ t }: { t: CatT }) {
  const appCtx = useAppContext();
  const [showMainCategories, setShowMainCategories] = useState(false);

  return (
    <div
      className={css({
        padding: '{spacing.side.v} 0',
        top: '0',
        position: 'sticky',
        backgroundColor: 'white',
      })}
    >
      <select
        aria-label='Main category selection'
        className={css({
          width: '100%',
        })}
        onClick={(e) => {
          e.preventDefault();
          e.currentTarget.blur();
          setShowMainCategories(true);
        }}
      >
        <Categories categories={appCtx?.categories.value ?? []} />
      </select>
      {showMainCategories && (
        <MainCategories
          open={showMainCategories}
          onSelect={() => setShowMainCategories(false)}
          categories={appCtx?.categories.value ?? []}
          t={t}
        />
      )}
    </div>
  );
}
