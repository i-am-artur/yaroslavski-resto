// 'use client';
import Logo from '../../../src/app/logo/Logo';
import { CatT } from '../../../src/languages/translation/menu/cat/ua';
import { css, cx } from '../../../styled-system/css';
import { stack } from '../../../styled-system/recipes';
import Categories from './_components/categories/Categories';

export default async function CatPage(
  props: Readonly<{
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
  }>
) {
  const lang = (await props.params).slug;
  const t = (await import(`../../../src/languages/translation/menu/cat/${lang}`).then(
    (module) => module.default
  )) as CatT;

  return (
    <>
      <header>
        <Logo lang={lang} />
      </header>
      <Categories />
      <div className={css({ height: '150vh' })}>df</div>
    </>
  );
}
