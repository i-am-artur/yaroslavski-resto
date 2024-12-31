// 'use client';
import Logo from '../../../src/app/logo/Logo';
import CartContext from './_components/CartContext';

export default async function BaseLayout(
  props: Readonly<{
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
  }>
) {
  const lang = (await props.params).slug;

  return (
    <CartContext>
      <header>
        <Logo lang={lang} width={'50%'} />
      </header>
      {props.children}
    </CartContext>
  );
}
