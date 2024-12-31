import { Suspense } from 'react';
import { MenuT } from '../../../../src/languages/translation/app/menu/ua';
import { css } from '../../../../styled-system/css';
import Categories from './_components/categories/Categories';
import Loading from '../../../../src/ui/loading/Loading';
import Products from './_components/products/Products';
import MenuContext from './_components/context/Context';
import SearchParams from './_components/context/SearchParams';

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
    <MenuContext>
      <Suspense fallback={<Loading />}>
        <SearchParams />
      </Suspense>
      <main>
        <Categories t={t} />
        <Products />
      </main>
    </MenuContext>
  );
}
