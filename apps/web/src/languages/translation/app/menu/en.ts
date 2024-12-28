import { languageSelect } from '../../instances/languages/components/languageSelect/en';
import { categorySelect } from '../../instances/languages/components/selectCategory/en';
import { MenuT } from './ua';

export const catT = {
  ...languageSelect,
  ...categorySelect,
} satisfies MenuT;

export default catT;
