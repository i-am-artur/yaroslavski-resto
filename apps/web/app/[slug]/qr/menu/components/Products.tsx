// 'use client';
import { css } from '../../../../../styled-system/css';
import Product from './_product/Products';

export default function Products(props: { list: any[]; lang: string }) {
  return (
    props.list.length > 0 && (
      <ul
        className={css({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        {props.list.map((product: any, i: number) => {
          return (
            <li key={product.name.en + i} className={css({ paddingBottom: 'unit.v' })}>
              <Product value={product} lang={props.lang} />
            </li>
          );
        })}
      </ul>
    )
  );
}
