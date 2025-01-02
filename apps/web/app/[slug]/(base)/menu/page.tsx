import { cx } from '@repo/shared/styled-system/css';
import { MenuT } from '../../../../src/languages/translation/app/menu/ua';
import { css } from '../../../../styled-system/css';
import { stack } from '../../../../styled-system/recipes';
import Categories from './_components/categories/Categories';
import MenuContext from './_components/context/Context';
import Products from './_components/products/Products';
import SubCategories from './_components/subCategories/SubCategories';

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
      <main>
        <Categories t={t} />
        <nav className={cx(stack(), css({ display: 'flex', rowGap: 'side.v' }))}>
          <SubCategories />
        </nav>
        <Products />
      </main>
    </MenuContext>
  );
}
