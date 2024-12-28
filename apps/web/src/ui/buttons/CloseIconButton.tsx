'use client';
import { ButtonHTMLAttributes } from 'react';
import { css } from '../../../styled-system/css';

export default function CloseIconButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={css({
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: 'inherit',
        color: 'grey',
      })}
      {...props}
    >
      &#10005;
    </button>
  );
}
