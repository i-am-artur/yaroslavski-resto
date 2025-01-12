'use client';
import { button } from '@repo/shared/styled-system/recipes';
import { css, cx } from '../../../../../styled-system/css';
import { useCart, useCartDispatch } from '../../_components/CartContext';
import { useAppContext } from '../../../../../src/app/context/AppContext';
import { capacityUnit } from '../../../../../src/product/utils';
import { usePathname } from 'next/navigation';
import { telegramMessage } from '../../../../../src/services/service';
import { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';

const OrderError = dynamic(() => import('./OrderError'));

// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default function Order(props: { onOrder: (error?: any) => void }) {
  const cart = useCart();
  const cartDispatch = useCartDispatch();
  const appCtx = useAppContext();
  const lang = usePathname().split('/')[1] ?? 'ua';
  const [orderError, setOrderError] = useState(false);

  return (
    <Fragment>
      <button
        onClick={() => {
          const message = cart.cartItems.reduce(
            (acc, curr) => {
              if (curr.quantity === 0) return acc;
              return {
                value:
                  acc.value +
                  `${acc.index + 1}. ${curr.name.ua} ${curr.selectedPrice.capacity}${capacityUnit(curr.capacityUnit, lang)}-${curr.selectedPrice.value}грн (${curr.quantity} шт.)\n`,
                index: acc.index + 1,
              };
            },
            { value: '', index: 0 }
          );
          const total = cart.cartItems.reduce(
            (acc, curr) => acc + curr.selectedPrice.value * curr.quantity,
            0
          );
          telegramMessage(
            'Заказ: Стол ' +
              appCtx?.table?.name +
              ' (' +
              new Date().toLocaleString() +
              ')\n' +
              message.value +
              '\n' +
              `Загальна сума: ${total} грн.`
          )
            .then(() => {
              cartDispatch.setCartItems([]);
              props.onOrder();
            })
            .catch(() => setOrderError(true));
        }}
        className={cx(
          button({ variant: 'solid', color: 'primary' }),
          css({
            marginTop: 'box.v',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            sm: {
              width: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          })
        )}
      >
        Замовити
      </button>

      {orderError && (
        <OrderError open={orderError} onClose={() => setOrderError(false)} />
      )}
    </Fragment>
  );
}
