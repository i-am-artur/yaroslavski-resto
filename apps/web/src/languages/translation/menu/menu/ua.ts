import { languageSelect } from '../../instances/languages/components/languageSelect/ua';
import { categorySelect } from '../../instances/languages/components/selectCategory/ua';

export const qrMenuT = {
  ...languageSelect,
  ...categorySelect,
};
export default qrMenuT;

export type QrMenuT = typeof qrMenuT;

// export default t;
