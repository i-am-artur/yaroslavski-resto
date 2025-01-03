// 'use client';
import { Suspense } from 'react';
import { css, cx } from '../../../../styled-system/css';
import ClientPage from './_components/ClientPage';
import CallService from '../../../../src/ui/buttons/CallService';
import { stack } from '../../../../styled-system/recipes';
// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default async function BasketPage() {
  //   props: Readonly<{
  //     params: Promise<{ slug: string }>;
  //     children: React.ReactNode;
  //   }>
  //   const lang = (await props.params).slug;
  //   const t = (await import(
  //     `../../../../src/instances/languages/translation/qr/index/${lang}`
  //   ).then((module) => module.default)) as QrIndexT;
  {
    /* <Header lang={'ua'} t={{}}>
        <CallService />
        <h1 className={css({ marginTop: 'box.v', fontSize: '1.3rem', fontWeight: 500 })}>
          Замовити вибране
        </h1>
      </Header> */
  }
  return (
    <div
      className={cx(
        stack({ rGap: 'box' }),
        css({ marginTop: 'box.v' }),
        css({ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1024px' })
      )}
    >
      <CallService />
      <main>
        {/* <Suspense> */}
        <ClientPage />
        {/* </Suspense> */}
      </main>
    </div>
  );
}

// export const metadata: Metadata = {
//   title: {
//     absolute: 'Меню ресторана',
//   },
//   description:
//     'Відкрийте для себе наше різноманітне меню ресторана, що містить смачні страви, приготовані з свіжих інгредієнтів. Задовольніть свої бажання нашими кулінарними шедеврами вже сьогодні!',
// };
