// 'use client';
import { ReactNode, Suspense } from 'react';
import { css } from '../../../../styled-system/css';
import Logo from '../../../../src/instances/ui/logo/Logo';

export default function Header(props: {
  lang: string;
  t: any;
  children?: ReactNode | ReactNode[];
}) {
  return (
    <header
      className={css({
        paddingTop: 'side.v',
        paddingLeft: 'side.v',
        paddingRight: 'side.v',
        rowGap: 'unit.v',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        sm: {
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5,
        },
      })}
    >
      <Logo
        lang={props.lang}
        height='45%'
        width='45%'
        className={css({ maxWidth: '215px' })}
      />
      {props.children}
    </header>
  );
}
