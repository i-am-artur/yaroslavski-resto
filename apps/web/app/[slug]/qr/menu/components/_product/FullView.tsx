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
import Modal from '../../../../../../src/instances/ui/modals/Modal';
import CloseIconButton from '../../../../../../src/instances/ui/buttons/CloseIconButton';

export default function FullView(props: {
  open: boolean;
  onClose?: () => void;
  product: any;
  lang: string;
}) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div
        className={css({
          height: '550px',
          right: 0,
          left: 0,
          bottom: 0,
          overflowY: 'scroll',
          padding: 'radius.xl',
          backgroundColor: 'white',
          borderTopLeftRadius: 'xl',
          borderTopRightRadius: 'xl',
          position: 'fixed',
          zIndex: 80,
          animation: 'from-bottom-animate .3s linear',
          // -ms-overflow-style: none;
          scrollbarWidth: 'none',
        })}
        // onTouchStart={(event) => {
        //   const startY = event.touches[0].clientY;
        //   const startX = event.touches[0].clientX;
        //   const onTouchMove = (event: TouchEvent) => {
        //     const endY = event.touches[0].clientY;
        //     const endX = event.touches[0].clientX;
        //     const directionY = endY - startY;
        //     const directionX = endX - startX;
        //     if (Math.abs(directionY) > Math.abs(directionX)) {
        //       if (directionY > 0) {
        //         props.onClose?.();
        //       }
        //     }
        //   };
        //   document.addEventListener('touchmove', onTouchMove);
        //   document.addEventListener(
        //     'touchend',
        //     () => {
        //       document.removeEventListener('touchmove', onTouchMove);
        //     },
        //     { once: true }
        //   );
        // }}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            rowGap: 'box.v',
            border: 'none',
            fontSize: '1rem',
          })}
        >
          <h2
            className={css({
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              fontWeight: 'bold',
            })}
          >
            {props.product.name[props.lang]}
            <CloseIconButton onClick={props.onClose} />
          </h2>
          <p>{props.product.description[props.lang]}</p>
          <div
            className={css({
              overflowX: 'auto',
              width: '100%',
            })}
          >
            <ul
              className={css({
                display: 'flex',
                columnGap: 'unit.h',
                // justifyContent: 'center',
                // overflow: 'scroll-x',
                // width: '290px',
              })}
            >
              {props.product.image?.full?.map((el: any, i: number) => {
                return (
                  <li key={i}>
                    <img
                      className={css({
                        maxWidth: '280px',
                      })}
                      src={`${process.env.basePath}/assets/products/images/${el}`}
                      alt={props.product.name[props.lang]}
                      loading='lazy'
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}
