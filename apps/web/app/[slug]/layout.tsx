import { defaultFont } from '@repo/shared/src/styles/js/vars/font';
import QrContext from './qr/(components)/QrContext';
// import AppSearchParams from './qr/(components)/AppSearchParams';
// import { Suspense } from 'react';

export async function generateStaticParams() {
  return ['ua', 'en'].map((lang) => ({
    slug: lang,
  }));
}
export default async function QRLayout(
  props: Readonly<{
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
  }>
) {
  const { slug } = await props.params;

  return (
    <html lang={slug} className={defaultFont.className}>
      <QrContext lang={slug}>{props.children}</QrContext>
    </html>
  );
}
