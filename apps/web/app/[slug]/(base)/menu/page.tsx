import { cx } from '@repo/shared/styled-system/css';
import { MenuT } from '../../../../src/languages/translation/app/menu/ua';
import { css } from '../../../../styled-system/css';
import { stack } from '../../../../styled-system/recipes';
import Categories from './_components/categories/Categories';
import MenuContext from './_components/context/Context';
import Products from './_components/products/Products';
import SubCategories from './_components/categories/select/subCategories/SubCategories';
import ScrollToTop from '../../../../src/ui/buttons/ScrollToTop';
import { Fragment } from 'react';
import CallService from '../../../../src/ui/buttons/CallService';
import ShowBasket from './_components/products/_product/ShowBasket';
import Options from './_components/Options';
import Logo from '../../../../src/app/logo/Logo';
import CartContext from '../_components/CartContext';
import Header from '../_components/Header';

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
        <Header>
          <div
            className={cx(
              stack({ dir: 'row', cGap: 'unit' }),
              css({ margin: '{spacing.unit.v} 0' })
            )}
          >
            <CallService />
            <ShowBasket />
          </div>
        </Header>
        <MenuContext>
          <main
            className={cx(
              stack(),
              css({ sm: { flexDirection: 'row', columnGap: 'box.h' } })
            )}
          >
            <Categories t={t} />
            <Products />
            <ScrollToTop />
          </main>
        </MenuContext>
      </CartContext>
    </div>
  );
}
