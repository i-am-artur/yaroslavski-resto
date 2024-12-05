'use client';
import styled, { CSSProp } from 'styled-components';

export const Box = styled.div<{
  $sx?: CSSProp;
}>`
  ${({ $sx }) => $sx ?? null};
`;

export const Stack = styled.div<{
  $sx?: CSSProp;
}>`
  display: flex;
  flex-direction: column;
  ${({ $sx }) => $sx ?? null};
`;
