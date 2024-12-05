// "use client";

import { QrIndexT } from '../../../../../src/instances/languages/translation/qr/index/ua';
import { css } from '../../../../../styled-system/css';

const s = {
  contacts: {
    box: css({
      columnGap: 'unit.h',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }),
    icon: css({ filter: 'grayscale(1)' }),
    item: css({
      display: 'flex',
      flexDirection: 'column',
    }),
  },
};

export default function Footer(props: { t: QrIndexT }) {
  return (
    <footer
      className={css({
        rowGap: 'item.v',
        // paddingBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <h2 className={css({ fontSize: '1.3rem', fontWeight: 500 })}>{props.t.about}</h2>
      <address>{props.t.address}</address>
      <p className={s.contacts.box}>
        <span className={s.contacts.icon}>&#x1F551;</span>
        <span className={s.contacts.item}>
          <span>{props.t.workingHours}</span> {props.t.mn}.- {props.t.su}.: 11:00 - 21:00
        </span>
      </p>
      <p className={s.contacts.box}>
        <span className={s.contacts.icon}>&#128222;</span>
        <span className={s.contacts.item}>
          <span>{props.t.phones}:</span>{' '}
          <span>+38 (068) 712 2601, +38 (073) 712 2601</span>
        </span>
      </p>
    </footer>
  );
}
