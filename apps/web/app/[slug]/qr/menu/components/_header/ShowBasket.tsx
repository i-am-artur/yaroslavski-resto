'use client';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCart } from '../../../(components)/QrContext';
import { cx, css } from '../../../../../../styled-system/css';
import { button } from '../../../../../../styled-system/recipes/button.mjs';
import NextLink from 'next/link';
// TODO: add English to button

export default function ShowBasket() {
  const cart = useCart();

  return (
    <NextLink
      href={`/${location.pathname.split('/')[2]}/qr/basket`}
      className={cx(
        button({ variant: 'solid', color: 'primary' }),
        css({
          display: 'flex',
          columnGap: 'unit.v',
          flex: '1',
          justifyContent: 'center',
          // fontSize: '1rem',
          fontFamily: 'inherit',
        })
      )}
    >
      <FontAwesomeIcon icon={faBasketShopping} />
      Замовити вибране {cart.cartItems.length > 0 && `(${cart.cartItems.length})`}
    </NextLink>
  );
}
