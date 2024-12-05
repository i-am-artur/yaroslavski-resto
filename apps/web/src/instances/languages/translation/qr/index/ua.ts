import { languageSelect } from '../../instances/languages/components/languageSelect/ua';

export const qrIndexT = {
  name: 'Ресторан Ярославський',
  address: 'вул. Ярославьска, 17, Харків',
  about: 'Про заклад',
  workingHours: 'Робочі години',
  mn: 'Пн',
  su: 'Нд',
  phones: 'Телефони',
  ...languageSelect,
};

export default qrIndexT;

export type QrIndexT = typeof qrIndexT;
