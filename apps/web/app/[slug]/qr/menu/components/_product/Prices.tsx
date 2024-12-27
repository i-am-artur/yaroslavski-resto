'use client';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { Fragment, useState } from 'react';
import { useCartDispatch } from '../../../(components)/QrContext';
import useTable from '../../../../../../src/hooks/useTable';
import { css, cx } from '../../../../../../styled-system/css';
import { button } from '../../../../../../styled-system/recipes/button';
import CapacityUnit from './CapacityUnit';

// import AddedOrder from './AddedOrder';
const AddedOrder = dynamic(() => import('./AddedOrder'));

// export default function Prices(props: {
//   value: any;
//   lang: string;
//   capacityUnit: string;
// }) {
export default function Prices(props: { value: any; lang: string }) {
  const { table } = useTable();
  const cartDispatch = useCartDispatch();
  const [selectedPrice, setSelectedPrice] = useState<any>(props.value.price.qr[0]);
  const [showAddedOrder, setShowAddedOrder] = useState(false);

  return (
    props.value.price.qr.length > 0 && (
      <Fragment>
        <ul
          className={css({
            display: 'flex',
            flexDirection: 'row',
            columnGap: 'unit.v',
            rowGap: 'unit.v',
          })}
        >
          {props.value.price.qr.map((el: any) => {
            return (
              <li
                key={el.capacity}
                className={cx(
                  css({
                    // marginTop: 'side.v',
                    width: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '4px',
                  })
                )}
              >
                {props.value.price.qr.length > 1 ? (
                  <button
                    onClick={() => setSelectedPrice(el)}
                    className={cx(
                      button({
                        // variant: selectedPrice.value === el.value ? 'solid' : 'plain',
                        variant: 'plain',
                        color: 'primary',
                      }),
                      css({
                        // lineHeight: 1.3,
                        // fontSize: '1.2rem',
                        padding: '2px',
                        border:
                          selectedPrice.value === el.value
                            ? '2px solid black'
                            : '2px solid #808080',
                        color: selectedPrice.value === el.value ? 'black' : '#6d6d6d',
                        borderRadius: '4px',
                        fontWeight:
                          selectedPrice.value === el.value ? 'bolder' : 'normal',
                        backgroundColor:
                          selectedPrice.value === el.value ? '#f5f5f5' : 'white',
                      })
                    )}
                  >
                    {el.capacity}{' '}
                    <CapacityUnit value={props.value.capacityUnit} lang={props.lang} /> -{' '}
                    <span>{el.value} &#8372;</span>
                  </button>
                ) : (
                  <Fragment>
                    {el.capacity}{' '}
                    <CapacityUnit value={props.value.capacityUnit} lang={props.lang} /> -{' '}
                    <span>{el.value} &#8372;</span>
                  </Fragment>
                )}
              </li>
            );
          })}
        </ul>
        {table && (
          <button
            onClick={() => {
              cartDispatch.setCartItems((pre) => {
                if (
                  !pre.some((el) => {
                    const { quantity, ...productInBasket } = el;
                    return (
                      JSON.stringify(productInBasket) ===
                      JSON.stringify({ ...props.value, selectedPrice })
                    );
                  })
                )
                  return [...pre, { ...props.value, selectedPrice, quantity: 1 }];
                return pre;
              });
              setShowAddedOrder(true);
            }}
            className={cx(
              // button({ variant: 'solid', color: 'primary' }),
              css({
                display: 'flex',
                columnGap: 'unit.h',
                width: 'fit-content',
                padding: '5px',
                // marginTop: '4px',
                // color: 'white',
                // borderRadius: '4px',
                // alignItems: 'center',
                marginTop: '15px',
                background: 'none !important',
                color: 'primary',
                border: 'none',
              })
            )}
          >
            {/* <FontAwesomeIcon icon={faBasketShopping} /> */}
            <FontAwesomeIcon icon={faUtensils} size='lg' />
            Додати до замовлення
          </button>
        )}
        {/* {showAddedOrder && ( */}
        <AddedOrder open={showAddedOrder} onClose={() => setShowAddedOrder(false)} />
        {/* )} */}
      </Fragment>
    )
  );
}
