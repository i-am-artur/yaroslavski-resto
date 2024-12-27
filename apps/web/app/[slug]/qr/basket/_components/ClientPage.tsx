'use client';
import { button } from '@repo/shared/styled-system/recipes';
import NextLink from 'next/link';
import { Fragment, useState } from 'react';
import Header from '../../(components)/Header';
import { useCart } from '../../(components)/QrContext';
import useTable from '../../../../../src/hooks/useTable';
import { css, cx } from '../../../../../styled-system/css';
import CallService from '../../menu/components/_header/CallService';
import Order from './Order';
import Products from './Products';
import Total from './Total';
// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default function ClientPage() {
  const { table, tblSearchParam } = useTable();
  const cart = useCart();
  const [orderIsSent, setOrderIsSent] = useState(false);
  const total = cart.cartItems.reduce(
    (acc, curr) => acc + curr.selectedPrice.value * curr.quantity,
    0
  );
  const cartIsEmpty = cart.cartItems.length === 0;

  return (
    <Fragment>
      <Header lang={'ua'} t={{}}>
        <CallService />
        {!cartIsEmpty ||
          (!table && (
            <h1
              className={css({ marginTop: 'box.v', fontSize: '1.3rem', fontWeight: 500 })}
            >
              Замовити вибране
            </h1>
          ))}
      </Header>
      <main className={css({ padding: 'side.h' })}>
        {!orderIsSent && !cartIsEmpty && table && (
          <Fragment>
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
                Сума: <Total value={total} /> &#8372;
              </span>
              <span className={css({ marginLeft: 'unit.h' })}> </span>
            </div>
            <Order onOrder={() => setOrderIsSent(true)} />
          </Fragment>
        )}
        {orderIsSent && (
          <h1
            className={css({ marginTop: '100px', textAlign: 'center', color: 'green' })}
          >
            Дякуємо за замовлення
          </h1>
        )}
        {(cartIsEmpty || !table) && (
          <NextLink
            href={`/ua/qr?tbl=${tblSearchParam}`}
            className={cx(
              button({ color: 'primary', variant: 'solid' }),
              css({
                marginTop: '100px',
                // flex: '1',display: 'flex',
                display: 'block',
                textAlign: 'center',
                width: 'initial',

                sm: {
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: 'fit-content',
                },
              })
            )}
          >
            Повернутися до меню
          </NextLink>
        )}
      </main>
    </Fragment>
  );
}
