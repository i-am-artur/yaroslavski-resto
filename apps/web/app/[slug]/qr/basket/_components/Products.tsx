'use client';
import { useCart } from '../../(components)/QrContext';
import { css } from '../../../../../styled-system/css';
import Product from './Product';
import Total from './Total';

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
        {cartItems.map((item, i) => {
          return (
            <Product item={item} key={item.name.ua + item.selectedPrice} lang='ua' />
          );
        })}
      </ul>
    )
  );
}
