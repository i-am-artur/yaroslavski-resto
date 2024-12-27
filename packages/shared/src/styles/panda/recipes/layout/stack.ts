import { defineRecipe } from '@pandacss/dev';

export const stack = defineRecipe({
  className: 'stack',
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  defaultVariants: {
    dir: 'column',
    // rGap: 'box',
    // cGap: 'box',
  },
  variants: {
    dir: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
    rGap: {
      box: {
        rowGap: 'box.v',
      },
      item: {
        rowGap: 'item.v',
      },
      unit: {
        rowGap: 'unit.v',
      },
    },
    cGap: {
      box: {
        columnGap: 'box.h',
      },
      item: {
        columnGap: 'item.h',
      },
      unit: {
        columnGap: 'unit.h',
      },
    },
  },
});
