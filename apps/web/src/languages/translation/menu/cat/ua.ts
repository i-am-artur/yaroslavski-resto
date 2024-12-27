import { languageSelect } from '../../instances/languages/components/languageSelect/ua';
import { categorySelect } from '../../instances/languages/components/selectCategory/ua';

export const catT = {
  ...languageSelect,
  ...categorySelect,
};
export default catT;

export type CatT = typeof catT;

// export default t;
