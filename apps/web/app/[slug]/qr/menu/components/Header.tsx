// 'use client';
import LanguageSelect from '../../../../../src/instances/languages/components/LanguageSelect';
import Logo from '../../../../../src/instances/ui/logo/Logo';
import { css } from '../../../../../styled-system/css';

export default function Header(props: { lang: string; t: any }) {
  return (
    <header
      className={css({
        padding: 'side.v',
        rowGap: 'item.v',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        sm: {
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5,
        },
      })}
    >
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}
      >
        <Logo
          lang={props.lang}
          height='50%'
          width='50%'
          className={css({ maxWidth: '215px' })}
        />
        <LanguageSelect t={props.t} />
      </div>
    </header>
  );
}
