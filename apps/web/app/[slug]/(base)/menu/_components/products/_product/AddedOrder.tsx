'use client';
import { useEffect } from 'react';
import { css } from '../../../../../../../styled-system/css';
import ShowBasket from './ShowBasket';

export default function AddedOrder(props: { open: boolean; onClose?: () => void }) {
  useEffect(() => {
    if (props.open) {
      setTimeout(() => {
        props.onClose?.();
      }, 1500);
    }
  }, [props.open]);

  return (
    <div
      className={css({
        display: props.open ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '0',
        left: '0',
        right: '0',
        padding: 'box.v',
        backgroundColor: '#357960',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.5rem',
        zIndex: 20,
        ...(!props.open && { opacity: 0, transition: 'all 250ms linear 2s' }),
        maxWidth: '350px',
        sm: {
          top: 10,
          borderRadius: 8,
        },
      })}
    >
      <div className={css({ marginBottom: 'item.v' })}>Замовлення додано</div>
      <ShowBasket />
    </div>
  );
}
