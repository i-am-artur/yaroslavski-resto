// 'use client';
import { Fragment } from 'react';
import { css } from '../../../../../../styled-system/css';

export default function Prices(props: { value: any; lang: string }) {
  return (
    props.value.length > 0 && (
      <ul>
        {props.value.map((el: any) => {
          return (
            <li
              key={el.capacity}
              className={css({
                fontSize: '1.2rem',
              })}
            >
              {el.capacity}{' '}
              {(() => {
                switch (props.value.capacityUnit) {
                  case 'g':
                    return props.lang === 'ua' ? 'гр' : 'g';
                  case 'ball':
                    return props.lang === 'ua' ? 'кулька' : 'ball';
                  case 'ml':
                    return props.lang === 'ua' ? 'мл' : 'ml';
                  case 'qty':
                    return props.lang === 'ua' ? 'шт' : 'qty';
                  default:
                    return '';
                }
              })()}{' '}
              -{' '}
              <span
                className={css({
                  fontWeight: 500,
                })}
              >
                {el.value} &#8372;
              </span>
            </li>
          );
        })}
      </ul>
    )
  );
}
