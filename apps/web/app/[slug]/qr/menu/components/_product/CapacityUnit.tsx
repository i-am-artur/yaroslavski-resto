'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTable from '../../../../../../src/hooks/useTable';
import { css } from '../../../../../../styled-system/css';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { cx } from '@repo/shared/styled-system/css';
import { button } from '../../../../../../styled-system/recipes/button';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons/faBasketShopping';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong';

export default function CapacityUnit(props: { value: any; lang: string }) {
  return (() => {
    switch (props.value) {
      case 'g':
        return props.lang === 'ua' ? 'гр' : 'g';
      case 'ball':
        return props.lang === 'ua' ? 'кулька' : 'ball';
      case 'ml':
        return props.lang === 'ua' ? 'мл' : 'ml';
      case 'qty':
        return props.lang === 'ua' ? 'шт' : 'qty';
      default:
        return '';
    }
  })();
}
