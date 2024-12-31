'use client';
import { MenuT } from '../../../../../../src/languages/translation/app/menu/ua';
import Select from './select/Select';

export default function Categories({ t }: { t: MenuT }) {
  return <Select t={t} />;
}
