import { IndexT } from '../../../../src/languages/translation/app/index/ua';
import { css } from '../../../../styled-system/css';
import { cx } from '../../../../styled-system/css/cx';
import { card, stack } from '../../../../styled-system/recipes';

const s = {
  contacts: {
    box: cx(
      stack({ dir: 'row', cGap: 'unit' }),
      css({
        alignItems: 'center',
      })
    ),
    icon: css({ filter: 'grayscale(1)' }),
    item: stack({
      rGap: 'unit',
    }),
  },
};

export default function Footer(props: { t: IndexT }) {
  return (
    <footer className={cx(card(), stack({ rGap: 'item' }))}>
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
