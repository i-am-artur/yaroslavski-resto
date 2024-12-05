import { radius } from '../../js/vars/borders';
import { box, item, unit, body } from '../../js/vars/layouts';

export const tokens = {
  colors: {
    primary: {
      DEFAULT: { value: '#4A2626' },
      text: { value: 'white' },
    },
    secondary: {
      DEFAULT: { value: '#d4d4d4' },
      text: { value: 'black' },
    },
    transparent: {
      modal: { value: '#00000090' },
    },
  },
  spacing: {
    box: {
      h: { value: box.gap.h + 'px' },
      v: { value: box.gap.v + 'px' },
    },
    item: {
      h: { value: item.gap.h + 'px' },
      v: { value: item.gap.v + 'px' },
    },
    unit: {
      h: { value: unit.gap.h + 'px' },
      v: { value: unit.gap.v + 'px' },
    },
    side: {
      h: { value: body.padding.h + 'px' },
      v: { value: body.padding.v + 'px' },
    },
    sideReverse: {
      h: { value: -body.padding.h + 'px' },
      v: { value: -body.padding.v + 'px' },
    },
    sideDoubleReverse: {
      h: { value: -2 * body.padding.h + 'px' },
      v: { value: -2 * body.padding.v + 'px' },
    },
    radius: {
      xl: { value: radius.xl + 'px' },
      big: { value: radius.big + 'px' },
      std: { value: radius.std + 'px' },
    },
  },
  radii: {
    xl: { value: radius.xl + 'px' },
    big: { value: radius.big + 'px' },
    std: { value: radius.std + 'px' },
    sm: { value: radius.sm + 'px' },
  },
};
