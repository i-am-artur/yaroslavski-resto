// 'use client';
import { Fragment } from 'react';
import Logo from '../../../src/app/logo/Logo';
import { IndexT } from '../../../src/languages/translation/app/index/ua';
import CallService from '../../../src/ui/buttons/CallService';
import { css, cx } from '../../../styled-system/css';
import { stack } from '../../../styled-system/recipes';
import Categories from './_components/Categories';
import Footer from './_components/Footer';
import s from './index.module.css';

export default async function MenuPage(
  props: Readonly<{
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
  }>
) {
  const lang = (await props.params).slug;
  const t = (await import(`../../../src/languages/translation/app/index/${lang}`).then(
    (module) => module.default
  )) as IndexT;

  return (
    <Fragment>
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
          s.pageBackground
        )}
      />
      <div
        className={cx(
          css({ top: 0, left: 0, right: 0, position: 'absolute' }),
          s.headerBg
        )}
      />
      <div
        className={cx(
          stack({ rGap: 'box' }),
          css({
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1024px',
          })
        )}
      >
        <header
          className={cx(
            stack(),
            css({ rowGap: 'inherit', sm: { paddingRight: 'side.h' } })
          )}
        >
          <div
            className={css({
              marginTop: '70px',
              padding: 'item.h',
              textAlign: 'center',
              borderRadius: 'big',
              backgroundColor: 'white',
            })}
          >
            <Logo lang='ua' className={css({ maxWidth: '100%' })} />
            <h1 className={css({ fontSize: '1.3rem', fontWeight: 500 })}>{t.name}</h1>
            <address>{t.address}</address>
          </div>
          <CallService />
        </header>
        <div
          className={cx(
            stack({ cGap: 'box' }),
            css({
              rowGap: 'inherit',
              paddingBottom: '50px',
              sm: { flexDirection: 'row', flex: '1 1 50%' },
            })
          )}
        >
          <main
            className={cx(
              css({
                sm: { flex: '0 1 50%' },
              })
            )}
          >
            <Categories />
          </main>
          <Footer t={t} />
        </div>
      </div>
    </Fragment>
  );
}
