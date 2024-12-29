import { css } from '../../styled-system/css';

export default function Divider() {
  return (
    <div
      title='divider'
      className={css({
        marginTop: 'unit.v',
        marginBottom: 'item.v',
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
      })}
    />
  );
}
