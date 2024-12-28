import { languageSelect } from '../../instances/languages/components/languageSelect/ua';
import { categorySelect } from '../../instances/languages/components/selectCategory/ua';

export const menuT = {
  ...languageSelect,
  ...categorySelect,
};
export default menuT;

export type MenuT = typeof menuT;
