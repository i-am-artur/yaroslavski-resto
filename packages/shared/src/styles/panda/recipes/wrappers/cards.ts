import { defineRecipe } from '@pandacss/dev';
import { card as jsCard } from '../../../js/cards';

export const card = defineRecipe({
  className: 'card',
  base: {
    ...jsCard,
  },
});
