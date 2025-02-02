import { defaultFont } from '@repo/shared/src/styles/js/vars/font';
import { css } from '../../styled-system/css';
import CartContext from './(base)/_components/CartContext';

export async function generateStaticParams() {
  return ['ua', 'en'].map((lang) => ({
    slug: lang,
  }));
}

export default async function SlugLayout(
  props: Readonly<{
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
  }>
) {
  return (
    <html lang={(await props.params).slug} className={defaultFont.className}>
      <body
        className={css({
          padding: ' {spacing.side.h}  {spacing.side.h} 0 {spacing.side.h}',
          sm: {
            paddingRight: 0,
          },
        })}
      >
        <CartContext>{props.children}</CartContext>
      </body>
    </html>
  );
}
