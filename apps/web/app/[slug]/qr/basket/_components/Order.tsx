'use client';
import { button } from '@repo/shared/styled-system/recipes';
import { css, cx } from '../../../../../styled-system/css';
import { useCart } from '../../(components)/QrContext';
import { telegramMessage } from '../../../../../src/service';

// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default function Order() {
  const cart = useCart();

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
        telegramMessage(message.value + '\n' + `Загальна сума: ${total} грн.`);
        // console.log(message.value + '\n' + `Загальна сума: ${total} грн.`);
      }}
      className={cx(
        button({ variant: 'solid', color: 'primary' }),
        css({
          marginTop: 'box.v',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        })
      )}
    >
      Замовити
    </button>
  );
}
