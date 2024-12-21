'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTable from '../../../../../../src/hooks/useTable';
import { css } from '../../../../../../styled-system/css';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { cx } from '@repo/shared/styled-system/css';
import { button } from '../../../../../../styled-system/recipes/button';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons/faBasketShopping';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong';

export default function Prices(props: {
  value: any;
  lang: string;
  capacityUnit: string;
}) {
  const { table } = useTable();

  return (
    props.value.length > 0 && (
      <ul>
        {props.value.map((el: any) => {
          return (
            <li
              key={el.capacity}
              className={css({
                display: 'flex',
                alignItems: 'center',
                columnGap: 'unit.h',
                fontSize: '1.2rem',
              })}
            >
              {el.capacity}{' '}
              {(() => {
                switch (props.capacityUnit) {
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
              {/* {table && (
                <button
                  className={cx(
                    button({ variant: 'solid', color: 'primary' }),
                    css({
                      display: 'flex',
                      columnGap: 'unit.h',
                      padding: '4px',
                      // width: '40px',
                      borderRadius: 'std',
                    })
                  )}
                > */}
              {/* <FontAwesomeIcon icon={faCirclePlus} /> */}
              {/* <FontAwesomeIcon icon={faRightLong} />
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>
              )}*/}
            </li>
          );
        })}
      </ul>
    )
  );
}
