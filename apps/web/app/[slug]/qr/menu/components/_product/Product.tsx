'use client';
import { Fragment, useState } from 'react';
import { css } from '../../../../../../styled-system/css';
import Prices from './Prices';
import { useSearchParams } from 'next/navigation';
import useTable from '../../../../../../src/hooks/useTable';
import dynamic from 'next/dynamic';
// import FullView from './FullView';
const FullView = dynamic(() => import('./FullView'));

export default function Product(props: { value: any; lang: string }) {
  const [fullViewOpen, setFullViewOpen] = useState(false);

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
          <div
            className={css({ fontWeight: 500 })}
            onClick={() => {
              setFullViewOpen(true);
            }}
          >
            {props.value.name[props.lang]}
          </div>
          {/* {props.value.price.qr.length > 0 } */}
          <Prices
            value={props.value.price.qr}
            capacityUnit={props.value.capacityUnit}
            lang={props.lang}
          />
          <p className={css({ fontSize: '14px', color: '#808080' })}>
            {props.value.description[props.lang]}
          </p>
        </div>
        <img
          src={(function () {
            // if (!Array.isArray(product.image))
            //   return `${process.env.basePath}/assets/site/food1.gif`;

            return props.value.image?.thumb
              ? `${process.env.basePath}/assets/products/images/${props.value.image.thumb}`
              : `${process.env.basePath}/assets/site/food1.gif`;
          })()}
          onClick={() => {
            setFullViewOpen(true);
          }}
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
      {fullViewOpen && (
        <FullView
          open={fullViewOpen}
          onClose={() => setFullViewOpen(false)}
          product={props.value}
          lang={props.lang}
        />
      )}
    </Fragment>
  );
}
