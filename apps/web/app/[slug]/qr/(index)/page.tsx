// 'use client';
import LanguageSelect from '../../../../src/instances/languages/components/LanguageSelect';
import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';
import Logo from '../../../../src/instances/ui/logo/Logo';
import { css, cx } from '../../../../styled-system/css';
import { card } from '../../../../styled-system/recipes';
import ClientPage from './components/ClientPage';
import Footer from './components/Footer';
import './index.css';
import type { Metadata, ResolvingMetadata } from 'next';

export default async function QRPage(
  props: Readonly<{
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
  }>
) {
  const lang = (await props.params).slug;
  const t = (await import(
    `../../../../src/instances/languages/translation/qr/index/${lang}`
  ).then((module) => module.default)) as QrIndexT;

  return (
    <body className={css({ backgroundColor: '#f3f3f3' })}>
      <div
        className={cx(
          css({
            display: 'flex',
            flexDirection: 'column',
            padding: 'side.h',
            rowGap: 'box.v',
          }),
          'pageWrapper'
        )}
      >
        <LanguageSelect t={t} />
        <div
          className={css({
            marginTop: '70px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            maxWidth: '1024px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: 'box.v',
          })}
        >
          <header className={cx(card(), css({ textAlign: 'center' }))}>
            <Logo
              lang={lang}
              className={css({
                maxWidth: '100%',
                display: 'inline-block',
              })}
            />

            <h1 className={css({ fontSize: '1.3rem', fontWeight: 500 })}>{t.name}</h1>
            <address>{t.address}</address>
          </header>
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              sm: { flexDirection: 'row' },
              rowGap: 'inherit',
              columnGap: 'box.h',
              paddingBottom: 'box.v',
            })}
          >
            <ClientPage />
            <Footer t={t} />
          </div>
        </div>
      </div>
    </body>
  );
}

export const metadata: Metadata = {
  title: {
    absolute: 'Меню ресторана',
  },
  description:
    'Відкрийте для себе наше різноманітне меню ресторана, що містить смачні страви, приготовані з свіжих інгредієнтів. Задовольніть свої бажання нашими кулінарними шедеврами вже сьогодні!',
};
