'use client';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppContext } from '../../app/context/AppContext';
import { telegramMessage } from '../../services/service';
import { css, cx } from '../../../styled-system/css';
import { button } from '../../../styled-system/recipes';

// TODO: add English to button

export default function CallService() {
  const appCtx = useAppContext();

  return (
    appCtx?.table?.id && (
      <button
        onClick={() => {
          telegramMessage(`Вызов: Стол ${appCtx?.table?.name}`);
        }}
        className={cx(
          button({
            variant: 'solid',
            color: 'primary',
          }),
          css({
            // display: 'flex',
            // columnGap: 'unit.v',
            // flexBasis: '1',
            // maxHeight: '34px',
            // alignItems: 'center',
            // lineHeight: '1rem',
            // flex: '1',
            // justifyContent: 'center',
            width: 'initial',

            sm: {},
          })
        )}
      >
        <FontAwesomeIcon icon={faBell} />
        Виклик Офіціанта
      </button>
    )
  );
}
