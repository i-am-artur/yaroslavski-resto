'use client';
import { Fragment } from 'react';
import { MenuT } from '../../../../../../src/languages/translation/app/menu/ua';
import Select from './select/Select';
import Sidebar from './sidebar/SideBar';

export default function Categories({ t }: { t: MenuT }) {
  return (
    <nav>
      <Select t={t} />
      <Sidebar />
    </nav>
  );
}
