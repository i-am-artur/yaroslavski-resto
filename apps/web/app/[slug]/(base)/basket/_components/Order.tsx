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
import { ClientContactsType, defaultContactError } from './ClientPage';

const OrderError = dynamic(() => import('./OrderError'));

export default function Order(props: {
  onOrder: (error?: any) => void;
  onContactError: (errors: any) => void;
  clientContacts: ClientContactsType;
}) {
  const cart = useCart();
  const cartDispatch = useCartDispatch();
  const appCtx = useAppContext();
  const lang = usePathname().split('/')[1] ?? 'ua';
  const [orderError, setOrderError] = useState(false);

  const clientContacts = (() => {
    if (appCtx?.delivery?.isDelivery) {
      return (
        `Им'я: ${props.clientContacts.name}\n` +
        `Адреса: ${props.clientContacts.address}\n` +
        `Номер телефону: ${props.clientContacts.phone}\n ` +
        `Email: ${props.clientContacts.email}\n` +
        `Коментар: ${props.clientContacts.comment}`
      );
    }

    return '';
  })();

  return (
    <Fragment>
      <button
        onClick={async () => {
          props.onContactError(defaultContactError);

          if (appCtx?.delivery?.isDelivery) {
            if (
              props.clientContacts.name === '' ||
              props.clientContacts.address === '' ||
              props.clientContacts.phone === '' ||
              props.clientContacts.email === '' ||
              props.clientContacts.acceptConditions === false
            ) {
              props.onContactError({
                name: props.clientContacts.name === '',
                address: props.clientContacts.address === '',
                phone: props.clientContacts.phone === '',
                email: props.clientContacts.email === '',
                acceptConditions: props.clientContacts.acceptConditions === false,
              });
              return;
            }
          }

          const message = cart.cartItems.reduce(
            (acc, curr) => {
              if (curr.quantity === 0) return acc;
              return {
                value:
                  acc.value +
                  `${acc.index + 1}. (${curr.category}) ${curr.name.ua} ${curr.selectedPrice.capacity}${capacityUnit(curr.capacityUnit, lang)}-${curr.selectedPrice.value}грн (${curr.quantity} шт.)\n`,
                index: acc.index + 1,
              };
            },
            { value: '', index: 0 }
          );
          const total = cart.cartItems.reduce(
            (acc, curr) => acc + curr.selectedPrice.value * curr.quantity,
            0
          );
          const orderResponse = await telegramMessage(
            'Заказ ' +
              (() => {
                if (appCtx?.delivery?.isDelivery) return 'доставка. \n';

                return `: Стол ${appCtx?.table?.name}`;
              })() +
              (() => {
                const orderDate = new Date();
                const date = orderDate.toLocaleDateString('en-GB');
                const time = orderDate.toLocaleTimeString('en-GB');
                return '(' + date + ' ' + time + ')\n';
              })() +
              message.value +
              `\nЗагальна сума: ${total} грн.\n` +
              clientContacts
          );
          if (orderResponse.ok) {
            cartDispatch.setCartItems([]);
            props.onOrder();
          } else {
            setOrderError(true);
          }
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
