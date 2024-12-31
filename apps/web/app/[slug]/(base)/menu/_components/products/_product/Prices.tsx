'use client';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { Fragment, useState } from 'react';
import { css, cx } from '../../../../../../../styled-system/css';
import { button } from '../../../../../../../styled-system/recipes';
import { usePathname } from 'next/navigation';
import { capacityUnit } from '../../../../../../../src/product/utils';
import { useAppContext } from '../../../../../../../src/app/context/AppContext';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons/faBasketShopping';
import { useCartDispatch } from '../../../../_components/CartContext';

const AddedOrder = dynamic(() => import('./AddedOrder'));

export default function Prices(props: { value: any }) {
  const lang = usePathname().split('/')[1] ?? 'ua';
  const appCtx = useAppContext();
  const cartDispatch = useCartDispatch();
  // const cartDispatch = useCartDispatch();
  const [selectedPrice, setSelectedPrice] = useState<any>(props.value.price.qr[0]);
  const [showAddedOrder, setShowAddedOrder] = useState(false);

  return (
    props.value.price.qr.length > 0 && (
      <Fragment>
        <ul
          className={css({
            display: 'flex',
            columnGap: 'unit.v',
            rowGap: 'unit.v',
            flexDirection: appCtx?.table ? 'row' : 'column',
          })}
        >
          {props.value.price.qr.map((el: any) => {
            return (
              <li
                key={el.capacity}
                className={cx(
                  css({
                    width: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '4px',
                    // rowGap: '4px',
                  })
                )}
              >
                {appCtx?.table && props.value.price.qr.length > 1 ? (
                  <button
                    onClick={() => setSelectedPrice(el)}
                    disabled={appCtx?.table ? false : true}
                    className={cx(
                      appCtx?.table &&
                        button({
                          variant: 'plain',
                          color: 'primary',
                        }),
                      css({ position: 'initial' }),
                      appCtx?.table &&
                        css({
                          zIndex: 0,
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
                    {el.capacity} {capacityUnit(props.value.capacityUnit, lang)} -{' '}
                    <span>{el.value} &#8372;</span>
                  </button>
                ) : (
                  <Fragment>
                    {el.capacity} {capacityUnit(props.value.capacityUnit, lang)} -{' '}
                    <span>{el.value} &#8372;</span>
                  </Fragment>
                )}
              </li>
            );
          })}
        </ul>

        {appCtx?.table && (
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
              css({
                display: 'flex',
                columnGap: 'unit.h',
                width: 'fit-content',
                padding: '5px',
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
