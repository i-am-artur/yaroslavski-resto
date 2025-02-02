'use client';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';
import { useAppContext } from '../../../../../../../src/app/context/AppContext';
import { capacityUnit } from '../../../../../../../src/product/utils';
import { css, cx } from '../../../../../../../styled-system/css';
import { button, stack } from '../../../../../../../styled-system/recipes';
import { useCartDispatch } from '../../../../_components/CartContext';

const AddedOrder = dynamic(() => import('./AddedOrder'));

export default function Prices(props: { value: any }) {
  const lang = usePathname().split('/')[1] ?? 'ua';
  const appCtx = useAppContext();
  const cartDispatch = useCartDispatch();

  const [selectedPrice, setSelectedPrice] = useState<any>(props.value.price.qr[0]);
  const [showAddedOrder, setShowAddedOrder] = useState(false);
  const canOrder = !!appCtx?.table?.name || appCtx?.delivery;

  const qrPrice = props.value.price.qr;
  const deliveryPrice = props.value.price.delivery ?? [];
  const price = appCtx?.delivery ? deliveryPrice : qrPrice;

  return (
    price.length > 0 && (
      <Fragment>
        <ul
          className={cx(
            stack(),
            css({
              rowGap: 'unit.v',
              flexDirection: canOrder ? 'row' : 'column',
              columnGap: 'unit.h',
            })
          )}
        >
          {price.map((el: any) => {
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
                {canOrder && price.length > 1 ? (
                  <button
                    onClick={() => setSelectedPrice(el)}
                    disabled={canOrder ? false : true}
                    className={cx(
                      canOrder &&
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

        {canOrder && (
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
            className={cx(button())}
          >
            <FontAwesomeIcon icon={faUtensils} size='lg' />
            Додати до замовлення
          </button>
        )}
        {showAddedOrder && canOrder && (
          <AddedOrder open={showAddedOrder} onClose={() => setShowAddedOrder(false)} />
        )}
      </Fragment>
    )
  );
}
