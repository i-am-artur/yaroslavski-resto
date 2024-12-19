// 'use client';
import { Fragment } from 'react';
import { css } from '../../../../../../styled-system/css';
import Prices from './Prices';
export default function Product(props: { value: any; lang: string }) {
  return (
    <Fragment>
      <div
        title='divider'
        className={css({
          marginTop: 'unit.v',
          marginBottom: 'item.v',
          height: 1,
          width: '100%',
          backgroundColor: '#ccc',
        })}
      />
      <div
        className={css({
          display: 'flex',
          flexDirection: 'row',
          columnGap: 'unit.v',
        })}
      >
        <div
          className={css({
            flex: 1,
            rowGap: 'unit.v',
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <div className={css({ fontWeight: 500 })}>{props.value.name[props.lang]}</div>
          {/* {props.value.price.qr.length > 0 } */}
          <Prices value={props.value.price.qr} lang={props.lang} />
          <div className={css({ fontSize: '14px', color: '#808080' })}>
            {props.value.description[props.lang]}
          </div>
        </div>
        <img
          src={(function () {
            // if (!Array.isArray(product.image))
            //   return `${process.env.basePath}/assets/site/food1.gif`;

            return props.value.image?.thumb
              ? `${process.env.basePath}/assets/products/images/${props.value.image.thumb}`
              : `${process.env.basePath}/assets/site/food1.gif`;
          })()}
          width='100'
          height='100'
          className={css({
            borderRadius: 'std',
            // opacity: 0.3,
          })}
          alt={props.value.description[props.lang]}
          loading='lazy'
        />
      </div>
    </Fragment>
  );
}
