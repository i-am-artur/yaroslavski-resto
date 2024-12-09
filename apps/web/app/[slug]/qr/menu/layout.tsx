// 'use client';
import React, { Suspense } from 'react';
import LanguageSelect from '../../../../src/instances/languages/components/LanguageSelect';
import { css } from '../../../../styled-system/css';
import CategoriesSelect from './components/categorySelect/CategoriesSelect';
import Logo from '../../../../src/instances/ui/logo/Logo';
import { Metadata } from 'next';
import Header from './components/Header';
import MenuContext from './components/Context';
export default async function MenuLayout(
  props: Readonly<{
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
  }>
) {
  const lang = (await props.params).slug;
  const t = await import(
    `../../../../src/instances/languages/translation/qr/menu/${lang}`
  ).then((module) => module.default);

  return (
    <body>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          marginLeft: 'auto',
          maxWidth: '1024px',
          marginRight: 'auto',
        })}
      >
        <Header lang={lang} t={t} />
        <div
          className={css({
            padding: 'side.h',
            display: 'flex',
            gap: 'side.v',
            columnGap: 'box.v',
            flexDirection: 'column',
            sm: {
              flexDirection: 'row',
            },
          })}
        >
          <Suspense>
            <CategoriesSelect t={t} />
          </Suspense>
          <MenuContext lang={lang}>
            <Suspense>{props.children}</Suspense>
          </MenuContext>
        </div>
      </div>
    </body>
  );
}

export const metadata: Metadata = {
  title: {
    absolute: 'Меню ресторана',
  },
  description: '',
  // TODO: do not forget to add description
};
