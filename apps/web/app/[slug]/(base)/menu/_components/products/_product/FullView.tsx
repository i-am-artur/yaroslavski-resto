'use client';

import CloseIconButton from '../../../../../../../src/ui/buttons/CloseIconButton';
import Modal from '../../../../../../../src/ui/modals/Modal';
import { css } from '../../../../../../../styled-system/css';

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
          height: '77%',
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
        // when user clicks back button in browser, trigger props.onClose

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
            padding: 'item.h',
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
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                width: 0,
                background: 'transparent',
              },
            })}
          >
            <ul
              className={css({
                display: 'flex',
                columnGap: 'unit.h',
                justifyContent:
                  props.product.image?.full?.length > 1 ? 'flex-start' : 'center',
                // overflow: 'scroll-x',
                // width: '290px',
              })}
            >
              {props.product.image?.full?.map((el: any, i: number) => {
                return (
                  <li key={i}>
                    <img
                      className={css({
                        maxHeight: '320px',
                        // height: '60%'
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
