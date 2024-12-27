// 'use client';
import { Suspense } from 'react';
import Header from '../../../(components)/Header';
import { css } from '../../../../../../styled-system/css';
import CallService from './CallService';
import ShowBasket from './ShowBasket';

export default function MenuHeader(props: { lang: string; t: any }) {
  return (
    <Header lang={props.lang} t={props.t}>
      <div
        className={css({
          display: 'flex',
          columnGap: 'unit.h',
          sm: { width: 'fit-content', marginLeft: 'auto' },
        })}
      >
        <Suspense>
          <CallService />
        </Suspense>
        <ShowBasket />
      </div>
      {/* <LanguageSelect t={props.t} /> */}
    </Header>
    // <header
    //   className={css({
    //     paddingTop: 'side.v',
    //     paddingLeft: 'side.v',
    //     paddingRight: 'side.v',
    //     rowGap: 'unit.v',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     backgroundColor: 'white',
    //     sm: {
    //       position: 'sticky',
    //       top: 0,
    //       left: 0,
    //       right: 0,
    //       zIndex: 5,
    //     },
    //   })}
    // >
    //   <Logo
    //     lang={props.lang}
    //     height='45%'
    //     width='45%'
    //     className={css({ maxWidth: '215px' })}
    //   />
    //   <div
    //     className={css({
    //       display: 'flex',
    //       // justifyContent: 'space-between',
    //       alignItems: 'start',
    //       columnGap: 'unit.h',
    //     })}
    //   >
    //     <Suspense>
    //       <CallService />
    //     </Suspense>
    //     <ShowBasket />
    //     {/* <LanguageSelect t={props.t} /> */}
    //   </div>
    // </header>
  );
}
