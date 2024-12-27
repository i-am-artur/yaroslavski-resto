'use client';
import { button } from '@repo/shared/styled-system/recipes';
import { useCart, useCartDispatch } from '../../(components)/QrContext';
import useTable from '../../../../../src/hooks/useTable';
import { telegramMessage } from '../../../../../src/service';
import { css, cx } from '../../../../../styled-system/css';

// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default function Order(props: { onOrder: () => void }) {
  const cart = useCart();
  const cartDispatch = useCartDispatch();
  const { table } = useTable();

  return (
    <button
      onClick={() => {
        const message = cart.cartItems.reduce(
          (acc, curr, i) => {
            if (curr.quantity === 0) return acc;
            const capacityUnit = (() => {
              switch (curr.capacityUnit) {
                case 'g':
                  return 'гр';
                case 'ball':
                  return 'кулька';
                case 'ml':
                  return 'мл';
                case 'qty':
                  return 'шт';
                default:
                  return '';
              }
            })();
            return {
              value:
                acc.value +
                `${acc.index + 1}. ${curr.name.ua} ${curr.selectedPrice.capacity}${capacityUnit}-${curr.selectedPrice.value}грн (${curr.quantity} шт.)\n`,
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
            table +
            '\n' +
            message.value +
            '\n' +
            `Загальна сума: ${total} грн.`
        );
        cartDispatch.setCartItems([]);
        props.onOrder();
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
  );
}
