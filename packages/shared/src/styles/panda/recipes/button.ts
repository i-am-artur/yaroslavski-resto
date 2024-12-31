import { defineRecipe } from '@pandacss/dev';
import { cva } from '../../../../styled-system/css';

export const button = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-block',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    // position: 'relative',
    fontFamily: 'Roboto Condensed, Arial !important',
    fontSize: 'calc(15/16 * 1rem) !important',
    alignItems: 'center',
    maxHeight: '31px',
    border: 'none',
    // color: 'secondary.text',
    // backgroundColor: 'secondary',
    borderRadius: 'big',
  },
  defaultVariants: {
    variant: 'plain',
    color: 'secondary',
  },
  variants: {
    variant: {
      plain: {
        padding: '4px',
      },
      solid: {
        padding: 'unit.h',
      },
    },
    color: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary.text',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'primary',
      css: {
        color: 'primary.text',
        backgroundColor: 'primary',
      },
    },
    {
      variant: 'solid',
      color: 'secondary',
      css: {
        backgroundColor: 'secondary',
      },
    },
  ],
});
