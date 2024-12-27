'use client';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCart } from '../../../(components)/QrContext';
import { cx, css } from '../../../../../../styled-system/css';
import { button } from '../../../../../../styled-system/recipes/button.mjs';
import NextLink from 'next/link';
import useTable from '../../../../../../src/hooks/useTable';
// TODO: add English to button

export default function ShowBasket() {
  const cart = useCart();
  const { table, tblSearchParam } = useTable();
  const isDisabled = cart.cartItems.length === 0;

  return (
    table && (
      <NextLink
        aria-disabled={isDisabled}
        href={
          isDisabled
            ? ''
            : `/${location.pathname.split('/')[2]}/qr/basket?tbl=${tblSearchParam}`
        }
        className={cx(
          button({ variant: 'solid', color: 'primary' }),
          css({
            display: 'flex',
            columnGap: 'unit.v',
            flex: '1',
            justifyContent: 'center',
            fontFamily: 'inherit',
            backgroundColor: isDisabled ? '#a1a1a1 !important' : 'primary',
          })
        )}
      >
        <FontAwesomeIcon icon={faUtensils} />
        Замовити вибране {cart.cartItems.length > 0 && `(${cart.cartItems.length})`}
      </NextLink>
    )
  );
}
