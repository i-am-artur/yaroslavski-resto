'use client';
import { Suspense } from 'react';
import ScrollToTop from '../../../../src/instances/ui/buttons/ScrollToTop';
import { css } from '../../../../styled-system/css';
import Content from './components/Content';

export default function Menu() {
  return (
    <main
      className={css({
        backgroundColor: 'white',
        flex: '1',
      })}
    >
      <Suspense>
        <Content />
      </Suspense>
      <ScrollToTop />
    </main>
  );
}
