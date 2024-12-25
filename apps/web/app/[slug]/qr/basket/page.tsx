// 'use client';
import type { Metadata } from 'next';
import { css } from '../../../../styled-system/css';
import Header from '../(components)/Header';
import CallService from '../menu/components/_header/CallService';
import { useCart } from '../(components)/QrContext';
import ClientPage from './_components/ClientPage';
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

  return (
    <body>
      <Header lang={'ua'} t={{}}>
        <CallService />
        <h1 className={css({ marginTop: 'box.v', fontSize: '1.3rem', fontWeight: 500 })}>
          Замовити вибране
        </h1>
      </Header>

      <ClientPage />
    </body>
  );
}

// export const metadata: Metadata = {
//   title: {
//     absolute: 'Меню ресторана',
//   },
//   description:
//     'Відкрийте для себе наше різноманітне меню ресторана, що містить смачні страви, приготовані з свіжих інгредієнтів. Задовольніть свої бажання нашими кулінарними шедеврами вже сьогодні!',
// };
