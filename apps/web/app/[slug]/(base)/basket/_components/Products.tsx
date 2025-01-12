'use client';
import { css } from '../../../../../styled-system/css';
import Product from './Product';

// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default function Products({ cartItems }: { cartItems: any[] }) {
  // const cart = useCart();

  return (
    cartItems.length > 0 && (
      <ul
        className={css({
          display: 'flex',
          flexDirection: 'column',
          rowGap: 'unit.v',
        })}
      >
        {cartItems.map((item) => {
          return (
            <Product item={item} key={item.name.ua + item.selectedPrice} lang='ua' />
          );
        })}
      </ul>
    )
  );
}
