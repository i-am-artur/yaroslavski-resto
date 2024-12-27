'use client';
import { useAppContext } from '../../../../../../src/app/context/AppContext';
import { css, cx } from '../../../../../../styled-system/css';
import { stack } from '../../../../../../styled-system/recipes';

export default function Option({ category }: { category: any }) {
  return <option value={category.id}>{category.name['ua']}</option>;
}
