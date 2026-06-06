'use client';
import { cx } from '@repo/shared/styled-system/css';
import { useAppContext } from '../../../../../src/app/context/AppContext';
import CallService from '../../../../../src/ui/buttons/CallService';
import { stack } from '../../../../../styled-system/recipes';
import ShowBasket from '../_components/products/_product/ShowBasket';
import { css } from '../../../../../styled-system/css';

const announcementStyle = css({ color: 'red' });

export default function Options() {
  const appCtx = useAppContext();

  const curDate = new Date();
  // check if date is between 20/12 and 02/01
  const isChristmas = curDate.getMonth() === 0 && curDate.getDate() <= 2;

  return (
    (appCtx?.table?.id || appCtx?.delivery?.isDelivery) && (
      <div
        className={cx(
          stack({ dir: 'row', cGap: 'unit' }),
          css({ margin: '{spacing.unit.v} 0', justifyContent: 'flex-end' })
        )}
      >
        <CallService />
        {isChristmas && appCtx?.delivery?.isDelivery ? '' : <ShowBasket />}
      </div>
    )
  );
}
