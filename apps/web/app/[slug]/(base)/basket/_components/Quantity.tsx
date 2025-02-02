'use client';

import { css } from '../../../../../styled-system/css';

// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default function Quantity({ value }: { value: any }) {
  return (
    <input
      readOnly
      size={1}
      placeholder='quantity'
      className={css({
        width: '35px',
        fontSize: '1.26rem',
        padding: 'initial',
        textAlign: 'center',
      })}
      value={value}
    />
  );
}
