'use client';
import { cx } from '@repo/shared/styled-system/css';
import { useAppContext } from '../../../../../src/app/context/AppContext';
import CallService from '../../../../../src/ui/buttons/CallService';
import { stack } from '../../../../../styled-system/recipes';
import ShowBasket from '../_components/products/_product/ShowBasket';
import { css } from '../../../../../styled-system/css';

export default function Options() {
  const appCtx = useAppContext();
  return (
    appCtx?.table && (
      <div
        className={cx(
          stack({ dir: 'row', cGap: 'unit' }),
          css({ margin: '{spacing.unit.v} 0' })
        )}
      >
        <CallService />
        <ShowBasket />
      </div>
    )
  );
}
