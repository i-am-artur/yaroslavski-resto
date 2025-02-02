'use client';
import { css } from '../../../../../styled-system/css';
import { ClientContactsType } from './ClientPage';

const inputStyle = css({
  display: 'flex',
  flexDirection: 'column',
});
const requiredStyle = css({
  color: 'red',
});

export default function ClientContacts({
  newClientContacts,
  onChange,
  contactError,
}: {
  newClientContacts: ClientContactsType;
  onChange: (newClientContacts: ClientContactsType) => void;
  contactError: {
    name: boolean;
    address: boolean;
    phone: boolean;
    email: boolean;
  };
}) {
  return (
    <div
      className={css({
        marginTop: 'box.v',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 'item.v',
      })}
    >
      <label className={inputStyle}>
        <span>
          ім'я: <span className={requiredStyle}>*</span>:
        </span>
        <input
          type='text'
          value={newClientContacts.name}
          onChange={(e) => onChange({ ...newClientContacts, name: e.target.value })}
        />
        {contactError.name && (
          <span className={requiredStyle}>Поле обов'язково для заповнення</span>
        )}
      </label>

      <label className={inputStyle}>
        <span>
          Адрес: <span className={requiredStyle}>*</span>:
        </span>
        <input
          type='text'
          value={newClientContacts.address}
          onChange={(e) => onChange({ ...newClientContacts, address: e.target.value })}
        />
        {contactError.address && (
          <span className={requiredStyle}>Поле обов'язково для заповнення</span>
        )}
      </label>

      <label className={inputStyle}>
        <span>
          Телефон <span className={requiredStyle}>*</span>:
        </span>
        <input
          type='text'
          value={newClientContacts.phone}
          onChange={(e) => onChange({ ...newClientContacts, phone: e.target.value })}
        />
        {contactError.phone && (
          <span className={requiredStyle}>Поле обов'язково для заповнення</span>
        )}
      </label>

      <label className={inputStyle}>
        <span>
          Email: <span className={requiredStyle}>*</span>:
        </span>
        <input
          type='text'
          value={newClientContacts.email}
          onChange={(e) => onChange({ ...newClientContacts, email: e.target.value })}
        />
        {contactError.email && (
          <span className={requiredStyle}>Поле обов'язково для заповнення</span>
        )}
      </label>

      <label className={inputStyle}>
        Коментар:
        <textarea
          rows={3}
          value={newClientContacts.comment}
          onChange={(e) => onChange({ ...newClientContacts, comment: e.target.value })}
        />
      </label>
    </div>
  );
}
