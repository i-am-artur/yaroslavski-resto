'use client';
import { useSearchParams } from 'next/navigation';
import LanguageSelect from '../../../../../../src/instances/languages/components/LanguageSelect';
import Logo from '../../../../../../src/instances/ui/logo/Logo';
import { css, cx } from '../../../../../../styled-system/css';
import { button } from '../../../../../../styled-system/recipes/button.mjs';
import { useEffect, useState } from 'react';
import useTable from '../../../../../../src/hooks/useTable';

// TODO: add English to button

export default function CallService() {
  const searchParams = useSearchParams();
  const tbl = searchParams.get('tbl');
  const { table } = useTable();

  return (
    table && (
      <button
        onClick={() => {
          // fetch(`${process.env.basePath}/assets/tables.json`);
          fetch(`${process.env.basePath}/test.php?table=${table}`);
          // fetch(`http://localhost/yaroslavski/test.php?table=${table}`);
          // .then((res) => res.text())
          // .then((json) => console.log(json));
        }}
        className={cx(
          button({
            variant: 'solid',
            color: 'primary',
          }),
          css({ fontSize: '1rem' })
        )}
      >
        &#x1f514; Виклик Офіціанта
      </button>
    )
  );
}
