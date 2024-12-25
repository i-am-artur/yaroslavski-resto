'use client';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css, cx } from '../../../../../styled-system/css';
import CapacityUnit from '../../menu/components/_product/CapacityUnit';
import QuantityController from './QuantityController';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Delete from './Delete';

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
            {item.selectedPrice.capacity}{' '}
            <CapacityUnit value={item.capacityUnit} lang={'ua'} /> -{' '}
            <span>{item.selectedPrice.value} &#8372;</span>
          </div>
        </div>
      </span>
      <QuantityController item={item} />
    </li>
  );
}
