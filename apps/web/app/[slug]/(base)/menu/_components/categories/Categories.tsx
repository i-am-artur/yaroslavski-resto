'use client';
import { MenuT } from '../../../../../../src/languages/translation/app/menu/ua';
import { css } from '../../../../../../styled-system/css';
import Select from './select/Select';

export default function Categories({ t }: { t: MenuT }) {
  return (
    <nav
      className={css({
        top: '-1',
        position: 'sticky',
        zIndex: '5',
        sm: {
          display: 'none',
        },
      })}
    >
      <Select t={t} />
    </nav>
  );
}
