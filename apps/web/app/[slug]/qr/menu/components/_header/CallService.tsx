'use client';
import useTable from '../../../../../../src/hooks/useTable';
import { css, cx } from '../../../../../../styled-system/css';
import { button } from '../../../../../../styled-system/recipes/button.mjs';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { telegramMessage } from '../../../../../../src/service';

// TODO: add English to button

export default function CallService() {
  const { table } = useTable();

  return (
    table && (
      <button
        onClick={() => {
          telegramMessage(`Вызов: Стол ${table}`);
        }}
        className={cx(
          button({
            variant: 'solid',
            color: 'primary',
          }),
          css({
            display: 'flex',
            columnGap: 'unit.v',
            // flexBasis: '1',
            maxHeight: '34px',
            alignItems: 'center',
            // lineHeight: '1rem',
            // flex: '1',

            justifyContent: 'center',
            sm: {
              width: 'fit-content',
              alignSelf: 'center',
              marginLeft: 'auto',
              // flexBasis: 'initial',
            },
          })
        )}
      >
        <FontAwesomeIcon icon={faBell} />
        Виклик Офіціанта
      </button>
    )
  );
}
