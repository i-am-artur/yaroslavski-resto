'use client';
import { cx } from '@repo/shared/styled-system/css';
import { ReactNode } from 'react';
import Logo from '../../../../src/app/logo/Logo';
import { css } from '../../../../styled-system/css';
import { stack } from '../../../../styled-system/recipes';

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header
      className={cx(
        stack({ dir: 'column' }),
        css({
          justifyContent: 'space-between',
          sm: { flexDirection: 'row', alignItems: 'flex-end' },
        })
      )}
    >
      <Logo lang={'ua'} />
      {children}
    </header>
  );
}
