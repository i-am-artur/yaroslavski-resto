import { languageSelect } from '../../instances/languages/components/languageSelect/en';
import { categorySelect } from '../../instances/languages/components/selectCategory/en';
import { CatT } from './ua';

export const catT = {
  ...languageSelect,
  ...categorySelect,
} satisfies CatT;

export default catT;
