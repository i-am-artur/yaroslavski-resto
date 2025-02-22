'use client';
import { css } from '../../../../../styled-system/css';
import { ClientContactsType } from './ClientPage';
import NextLink from 'next/link';

const inputStyle = css({
  display: 'flex',
  flexDirection: 'column',
});
const requiredStyle = css({
  color: '#f24343',
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
    acceptConditions: boolean;
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
          // className={css}
        />
      </label>
      Оплата готівкою при доставці замовлення.
      <p>
        Ваші особисті дані будуть використовуватися для обробки ваших замовлень,
        розширення вашої роботи з сайтом та для інших цілей, описаних у нашій{' '}
        <NextLink href='/ua/privacyPolicy' className={css({ color: 'blue'})}>політиці конфіденційності</NextLink>
      </p>
      <div>
        <label
          // htmlFor='accept-conditions'
          className={css({
            display: 'flex',
            // flexDirection: 'column',
            alignItems: 'center',
            columnGap: 'unit.h',
          })}
        >
          <input
            // id='accept-conditions'
            type='checkbox'
            required
            className={css({ transform: 'scale(1.5)' })}
            onChange={(e) => {
              onChange({ ...newClientContacts, acceptConditions: e.target.checked });
            }}
          />{' '}
          <span>
            Я прочитав і погоджуюся з умовами веб-сайту{' '}
            <span className={css({ color: 'red' })}>*</span>
          </span>{' '}
        </label>
        {contactError.acceptConditions && (
          <span className={requiredStyle}>Поле обов'язково</span>
        )}
      </div>
    </div>
  );
}
