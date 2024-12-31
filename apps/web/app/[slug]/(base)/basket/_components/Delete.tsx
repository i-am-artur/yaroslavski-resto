'use client';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css, cx } from '../../../../../styled-system/css';
import { useCartDispatch } from '../../_components/CartContext';

export default function Delete({ item }: { item: any }) {
  const cartDispatch = useCartDispatch();

  return (
    <button
      onClick={() =>
        cartDispatch.setCartItems((pre) => {
          return pre.filter(
            (el) =>
              !(
                el.name.ua === item.name.ua &&
                el.selectedPrice.capacity === item.selectedPrice.capacity
              )
          );
        })
      }
      className={cx(css({ backgroundColor: 'transparent', border: 'none' }))}
    >
      {/* <FontAwesomeIcon icon={faTrash} color='#ed4a4a' size='lg' /> */}
      <FontAwesomeIcon icon={faCircleXmark} color='#ed4a4a' size='lg' />
    </button>
  );
}
