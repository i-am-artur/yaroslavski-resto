// 'use client';
import React, { Suspense } from 'react';
import LanguageSelect from '../../../../src/instances/languages/components/LanguageSelect';
import { css } from '../../../../styled-system/css';
import CategoriesSelect from './components/categorySelect/CategoriesSelect';
import Logo from '../../../../src/instances/ui/logo/Logo';
import { Metadata } from 'next';
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
        <header
          className={css({
            padding: 'side.v',
            rowGap: 'item.v',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            sm: {
              position: 'sticky',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 5,
            },
          })}
        >
          <div
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            })}
          >
            <Logo
              lang={lang}
              height='50%'
              width='50%'
              className={css({ maxWidth: '215px' })}
            />
            <LanguageSelect t={t} />
          </div>
        </header>
        <div
          className={css({
            padding: 'side.h',
            display: 'flex',
            gap: 'side.v',
            columnGap: 'box.v',
            flexDirection: 'column',
            sm: {
              flexDirection: 'row',
              // position: 'fixed',
              // top: '80px',
              // left: '0',
              // right: '0',
            },
          })}
        >
          <Suspense>
            <CategoriesSelect t={t} />
          </Suspense>
          <Suspense>{props.children}</Suspense>
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
