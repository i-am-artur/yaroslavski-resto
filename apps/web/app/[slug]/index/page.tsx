// 'use client';
import { Fragment } from 'react';
import Logo from '../../../src/app/logo/Logo';
import { IndexT } from '../../../src/languages/translation/menu/index/ua';
import { css, cx } from '../../../styled-system/css';
import './index.css';
import { token } from '../../../styled-system/tokens';
import { card, stack } from '../../../styled-system/recipes';
import Categories from './_components/Categories';
import Footer from './_components/Footer';

export default async function MenuPage(
  props: Readonly<{
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
  }>
) {
  const lang = (await props.params).slug;
  const t = (await import(`../../../src/languages/translation/menu/index/${lang}`).then(
    (module) => module.default
  )) as IndexT;

  return (
    <div className={cx(stack({ rGap: 'box' }))}>
      <div
        className={cx(
          css({
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'fixed',
            padding: 'unit.h',
          }),
          'pageBackground'
        )}
      />
      <div
        className={cx(
          css({ top: 0, left: 0, right: 0, position: 'absolute' }),
          'headerBg'
        )}
      />
      <header
        className={css({
          marginTop: '70px',
          padding: 'item.h',
          textAlign: 'center',
          borderRadius: 'big',
          backgroundColor: 'white',
        })}
      >
        <Logo lang='ua' />
        <h1 className={css({ fontSize: '1.3rem', fontWeight: 500 })}>{t.name}</h1>
        <address>{t.address}</address>
      </header>
      <main>
        <Categories />
      </main>
      <Footer t={t} />
    </div>
  );
}
