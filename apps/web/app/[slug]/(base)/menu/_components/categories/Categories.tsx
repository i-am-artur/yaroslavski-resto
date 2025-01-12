'use client';
import { Fragment } from 'react';
import { MenuT } from '../../../../../../src/languages/translation/app/menu/ua';
import Select from './select/Select';
import dynamic from 'next/dynamic';
import { css, cx } from '../../../../../../styled-system/css';

import Sidebar from './sidebar/SideBar';
// const Sidebar = dynamic(() => import('./sidebar/SideBar'));

export default function Categories({ t }: { t: MenuT }) {
  return (
    <nav
    // className={css({
    //   padding: '{spacing.side.v} 0',
    //   top: '-1',
    //   position: 'sticky',
    //   backgroundColor: 'white',
    //   zIndex: '5',
    //   sm: {
    //     display: 'none',
    //   },
    // })}
    >
      <Select t={t} />
      <Sidebar />
    </nav>
  );
}
