'use client';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from 'next/link';
import { useAppContext } from '../../../../../../../src/app/context/AppContext';
import { button } from '../../../../../../../styled-system/recipes';
import { css, cx } from '../../../../../../../styled-system/css';
import { useCart } from '../../../../_components/CartContext';
// TODO: add English to button

export default function ShowBasket() {
  const appCtx = useAppContext();
  const cart = useCart();
  const isDisabled = cart.cartItems.length === 0;

  return (
    appCtx?.table && (
      <NextLink
        aria-disabled={isDisabled}
        href={isDisabled ? '' : `/${location.pathname.split('/')[2]}/basket`}
        className={cx(
          button({ variant: 'solid', color: 'primary' }),
          css({
            justifySelf: 'center',
          })
        )}
      >
        <FontAwesomeIcon icon={faUtensils} />
        Замовити обране {cart.cartItems.length > 0 && `(${cart.cartItems.length})`}
      </NextLink>
    )
  );
}
