import { cx } from '@repo/shared/styled-system/css';
import { MenuT } from '../../../../src/languages/translation/app/menu/ua';
import ScrollToTop from '../../../../src/ui/buttons/ScrollToTop';
import { css } from '../../../../styled-system/css';
import { stack } from '../../../../styled-system/recipes';
import CartContext from '../_components/CartContext';
import Header from '../_components/Header';
import Categories from './_components/categories/Categories';
import Sidebar from './_components/categories/sidebar/SideBar';
import MenuContext from './_components/context/Context';
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
    <div
      className={cx(
        css({
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1024px',
        })
      )}
    >
      <CartContext>
        <Header />
        <MenuContext>
          <main
            className={cx(
              stack(),
              css({
                sm: {
                  flexDirection: 'row',
                  columnGap: 'box.h',
                  // position: 'sticky',
                  // top: 0,
                },
              })
            )}
          >
            <Categories t={t} />
            <Sidebar />
            <Products />
            <ScrollToTop />
          </main>
        </MenuContext>
      </CartContext>
    </div>
  );
}
