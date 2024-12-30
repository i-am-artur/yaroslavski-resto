import { Suspense } from 'react';
import { MenuT } from '../../../../src/languages/translation/app/menu/ua';
import { css } from '../../../../styled-system/css';
import Categories from './_components/categories/Categories';
import Loading from '../../../../src/ui/loading/Loading';
import Products from './_components/products/Products';

export default async function MenuPage(
  props: Readonly<{
    params: Promise<{ slug: string }>;
  }>
) {
  const lang = (await props.params).slug;
  const t = (await import(`../../../../src/languages/translation/app/menu/${lang}`).then(
    (module) => module.default
  )) as MenuT;

  return (
    <>
      <Categories t={t} />
      <main className={css({ height: '150vh' })}>
        {/* <Suspense fallback={<Loading />}> */}
        <Products />
        {/* </Suspense> */}
      </main>
    </>
  );
}
