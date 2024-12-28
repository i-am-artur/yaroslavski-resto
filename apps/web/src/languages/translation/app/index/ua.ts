import { languageSelect } from '../../instances/languages/components/languageSelect/ua';

export const indexT = {
  name: 'Ресторан Ярославський',
  address: 'вул. Ярославьска, 17, Харків',
  about: 'Про заклад',
  workingHours: 'Робочі години',
  mn: 'Пн',
  su: 'Нд',
  phones: 'Телефони',
  ...languageSelect,
};

export default indexT;

export type IndexT = typeof indexT;
