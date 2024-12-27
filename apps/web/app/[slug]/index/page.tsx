'use client';
import { defaultFont } from '@repo/shared/src/styles/js/vars/font';
import { useAppContext } from '../../../_instances/app/context/AppContext';

export default function Menu() {
  const appCtx = useAppContext();
  console.log('🚀 ~ file: page.tsx:7 ~ appCtx:', appCtx);

  return (
    <html lang='en' className={defaultFont.className}>
      <body>
        <p>{appCtx?.table?.id}</p>
      </body>
    </html>
  );
}
