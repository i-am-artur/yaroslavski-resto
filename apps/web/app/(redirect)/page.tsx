'use client';
import { defaultFont } from '@repo/shared/src/styles/js/vars/font';
import ClientPage from './_components/ClientPage';
import { Suspense } from 'react';

// export async function generateStaticParams() {
//   return ['ua', 'en'].map((lang) => ({
//     slug: lang,
//   }));
// }

export default function Redirect() {
  return (
    <html lang='ua' className={defaultFont.className}>
      <body>
        <Suspense>
          <ClientPage />
        </Suspense>
      </body>
    </html>
  );
}
