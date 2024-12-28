'use client';
import { CatT } from '../../../../../../src/languages/translation/app/menu/ua';
import Select from './select/Select';

export default function Categories({ t }: { t: CatT }) {
  return <Select t={t} />;
}
