'use client';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css, cx } from '../../../../../styled-system/css';
import Quantity from './Quantity';
import { useCartDispatch } from '../../_components/CartContext';

// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default function QuantityController({ item }: { item: any }) {
  const cartDispatch = useCartDispatch();

  const changeQuantity = (item: any, quantity: number) => {
    if (quantity < 0) return;
    cartDispatch.setCartItems((pre) => {
      return pre.map((el) => {
        if (
          el.name.ua === item.name.ua &&
          el.selectedPrice.capacity === item.selectedPrice.capacity
        ) {
          return { ...el, quantity };
        }
        return el;
      });
    });
  };

  return (
    <div className={css({ display: 'flex', alignItems: 'center' })}>
      <button
        onClick={() => changeQuantity(item, item.quantity - 1)}
        className={cx(css({ padding: 'calc(4/16 * 1rem)' }))}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <Quantity value={item.quantity} />
      <button
        onClick={() => changeQuantity(item, item.quantity + 1)}
        className={cx(css({ padding: 'calc(4/16 * 1rem)' }))}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
