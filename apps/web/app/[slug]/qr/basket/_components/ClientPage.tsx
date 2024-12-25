'use client';
import { button } from '@repo/shared/styled-system/recipes';
import { useCart } from '../../(components)/QrContext';
import { css, cx } from '../../../../../styled-system/css';
import Product from './Product';
import Products from './Products';
import Total from './Total';
import Order from './Order';

// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default function ClientPage() {
  const cart = useCart();
  return (
    <main className={css({ padding: 'side.h' })}>
      <div
        className={css({
          //   marginBottom: 'unit.v',
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <h4>Найменування</h4>
        <h4>Кількість</h4>
      </div>
      <div
        title='divider'
        className={css({
          marginTop: 'unit.v',
          marginBottom: 'item.v',
          height: 1,
          width: '100%',
          backgroundColor: '#ccc',
        })}
      />
      <Products cartItems={cart.cartItems} />
      <div
        className={css({
          display: 'flex',
          justifyContent: 'flex-end',
          fontSize: '1.2rem',
          marginTop: 'unit.v',
        })}
      >
        <span>
          Сума: <Total cartItems={cart.cartItems} /> &#8372;
        </span>
        <span className={css({ marginLeft: 'unit.h' })}> </span>
      </div>
      <Order />
    </main>
  );
}
