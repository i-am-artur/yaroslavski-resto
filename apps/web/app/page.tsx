'use client';
import { defaultFont } from '@repo/shared/src/styles/js/vars/font';
import NextLink from 'next/link';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect(`/ua/qr`);

  return (
    <html lang='en' className={defaultFont.className}>
      <body>
        <p>
          Перенаправлення <NextLink href={`/ua/qr`}>QR-меню</NextLink>
        </p>
      </body>
    </html>
  );
}
