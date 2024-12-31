'use client';

import { capacityUnit } from '../../../../../src/product/utils';
import { css } from '../../../../../styled-system/css';
import Delete from './Delete';
import QuantityController from './QuantityController';

export default function Product({ item, lang }: { item: any; lang: string }) {
  return (
    <li
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      })}
    >
      <span
        className={css({
          display: 'flex',
          columnGap: 'unit.h',
          alignItems: 'flex-start',
        })}
      >
        <Delete item={item} />
        {/* {i + 1}.{' '} */}
        <div>
          <span
            className={css({
              fontSize: '1.1rem',
              fontWeight: 600,
            })}
          >
            {item.name[lang]}.{' '}
          </span>
          <div>
            {item.selectedPrice.capacity} {capacityUnit(item.capacityUnit, 'ua')} -{' '}
            <span>{item.selectedPrice.value} &#8372;</span>
          </div>
        </div>
      </span>
      <QuantityController item={item} />
    </li>
  );
}
