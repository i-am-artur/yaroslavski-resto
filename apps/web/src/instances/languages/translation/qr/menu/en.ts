import { languageSelect } from '../../instances/languages/components/languageSelect/en';
import { categorySelect } from '../../instances/languages/components/selectCategory/en';
import { QrMenuT } from './ua';

export const qrMenuT = {
  ...languageSelect,
  ...categorySelect,
} satisfies QrMenuT;

export default qrMenuT;
