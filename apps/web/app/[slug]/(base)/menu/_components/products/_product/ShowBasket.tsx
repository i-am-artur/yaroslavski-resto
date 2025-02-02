'use client';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from 'next/link';
import { useAppContext } from '../../../../../../../src/app/context/AppContext';
import { css, cx } from '../../../../../../../styled-system/css';
import { button } from '../../../../../../../styled-system/recipes';
import { useCart } from '../../../../_components/CartContext';

export default function ShowBasket() {
  const cart = useCart();
  const appCtx = useAppContext();
  const table = appCtx?.table?.id;
  const isDelivery = appCtx?.delivery?.isDelivery;
  const isDisabled = cart?.cartItems?.length === 0;

  return (
    (table || isDelivery) && (
      <NextLink
        aria-disabled={isDisabled}
        href={isDisabled ? '' : `/${location.pathname.split('/')[2]}/basket`}
        className={cx(
          button({ variant: 'solid', color: 'primary' }),
          css({
            // width: '100%',
            whiteSpace: 'nowrap',
            backgroundColor: isDisabled ? '#a1a1a1 !important' : 'primary',
          })
        )}
      >
        <FontAwesomeIcon icon={faUtensils} />
        Замовити вибране{' '}
        {cart?.cartItems?.length > 0 ? `(${cart?.cartItems?.length})` : ''}
      </NextLink>
    )
  );
}
