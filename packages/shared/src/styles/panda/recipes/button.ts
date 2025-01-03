import { defineRecipe } from '@pandacss/dev';
import { cva } from '../../../../styled-system/css';

export const button = defineRecipe({
  className: 'button',
  base: {
    display: 'flex',
    padding: '5px',
    // fontWeight: 500,
    fontFamily: 'Roboto Condensed, Arial !important',
    fontSize: 'calc(15/16 * 1rem) !important',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    columnGap: 'unit.h',
    rowGap: 'unit.h',
    // maxHeight: '31px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 'std',
  },
  defaultVariants: {
    color: 'primary',
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: 'initial',
      },
      plain: {
        backgroundColor: 'transparent',
      },
    },
    color: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      css: {
        color: 'primary.text',
        backgroundColor: 'primary',
      },
    },
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
        color: 'secondary.text',
        backgroundColor: 'secondary',
      },
    },
  ],
});
