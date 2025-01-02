'use client';
import dynamic from 'next/dynamic';
import { Fragment, useState } from 'react';
import Prices from './Prices';
import { usePathname } from 'next/navigation';
import Divider from '../../../../../../../src/ui/Divider';
import { css } from '../../../../../../../styled-system/css';
// import FullView from './FullView';
// const FullView = dynamic(() => import('./FullView'));

export default function Product(props: { value: any }) {
  const [fullViewOpen, setFullViewOpen] = useState(false);
  const lang = usePathname().split('/')[1] ?? 'ua';

  return (
    <Fragment>
      <Divider />
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
            {props.value.name[lang]}
          </div>
          <p className={css({ fontSize: '14px', color: '#808080' })}>
            {props.value.description[lang]}
          </p>
          <Prices value={props.value} />
        </div>
        <img
          src={(() => {
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
          alt={props.value.description[lang]}
          loading='lazy'
        />
      </div>
      {/* {fullViewOpen && (
        <FullView
          open={fullViewOpen}
          onClose={() => setFullViewOpen(false)}
          product={props.value}
          lang={props.lang}
        />
      )} */}
    </Fragment>
  );
}
