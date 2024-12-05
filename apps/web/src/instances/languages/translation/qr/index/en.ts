import { languageSelect } from '../../instances/languages/components/languageSelect/en';
import { QrIndexT } from './ua';

export const qrIndexT = {
  name: 'Restaurant Yaroslavski',
  address: 'Yaroslavski street, 17, Kharkiv, Ukraine',
  about: 'About the establishment',
  workingHours: 'Working Hours',
  mn: 'Mn',
  su: 'Su',
  phones: 'Phones',
  ...languageSelect,
} satisfies QrIndexT;

export default qrIndexT;
