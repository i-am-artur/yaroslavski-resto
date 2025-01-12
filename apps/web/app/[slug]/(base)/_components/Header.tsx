'use client';
import { cx } from '@repo/shared/styled-system/css';
import Logo from '../../../../src/app/logo/Logo';
import { css } from '../../../../styled-system/css';
import { stack } from '../../../../styled-system/recipes';
import CallService from '../../../../src/ui/buttons/CallService';
import ShowBasket from '../menu/_components/products/_product/ShowBasket';
import { useAppContext } from '../../../../src/app/context/AppContext';

export default function Header() {
  const appCtx = useAppContext();

  return (
    <header
      className={cx(
        stack({ dir: 'column' }),
        css({
          justifyContent: 'space-between',
          sm: { flexDirection: 'row', alignItems: 'flex-end' },
        })
      )}
    >
      <Logo lang={'ua'} className={css({ maxWidth: 200 })} />
      {appCtx?.table && (
        <div
          className={cx(
            stack({ dir: 'row', cGap: 'unit' }),
            css({ margin: '{spacing.unit.v} 0' })
          )}
        >
          <CallService />
          <ShowBasket />
        </div>
      )}
    </header>
  );
}
