'use client';
import { faBell, faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppContext } from '../../app/context/AppContext';
import { telegramMessage } from '../../services/service';
import { css, cx } from '../../../styled-system/css';
import { button } from '../../../styled-system/recipes';
import { useRef, useState } from 'react';

// TODO: add English to button

export default function CallService() {
  const appCtx = useAppContext();
  console.log('🚀 ~ CallService ~ appCtx:', appCtx);
  const [isCallServiceEnabled, setIsCallServiceEnabled] = useState(true);

  return (
    appCtx?.table?.id && (
      <button
        disabled={!isCallServiceEnabled}
        onClick={() => {
          setIsCallServiceEnabled(false);
          telegramMessage(`Вызов: Стол ${appCtx?.table?.name}`);

          setTimeout(() => {
            setIsCallServiceEnabled(true);
          }, 5000);
        }}
        className={cx(
          button({
            variant: 'solid',
            color: isCallServiceEnabled ? 'primary' : 'secondary',
          }),
          css({
            width: '100%',

            sm: {
              alignSelf: 'flex-end',
              width: 'fit-content',
            },
          })
        )}
      >
        <FontAwesomeIcon icon={faBell} />
        Виклик Офіціанта
        {!isCallServiceEnabled && <FontAwesomeIcon icon={faHourglassStart} spin={true} />}
      </button>
    )
  );
}
