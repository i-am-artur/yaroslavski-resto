'use client';
import { useCart } from '../../(components)/QrContext';
import { css } from '../../../../../styled-system/css';
import Product from './Product';

// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default function Total({ cartItems }: { cartItems: any[] }) {
  // const cart = useCart();

  return cartItems.reduce(
    (acc, curr) => acc + curr.selectedPrice.value * curr.quantity,
    0
  );
}
