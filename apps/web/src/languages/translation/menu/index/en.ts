import { IndexT } from './ua';
import { languageSelect } from '../../instances/languages/components/languageSelect/ua';

export const menuIndexT = {
  name: 'Restaurant Yaroslavski',
  address: 'Yaroslavski street, 17, Kharkiv, Ukraine',
  about: 'About the establishment',
  workingHours: 'Working Hours',
  mn: 'Mn',
  su: 'Su',
  phones: 'Phones',
  ...languageSelect,
} satisfies IndexT;

export default menuIndexT;
