'use client';
import { useAppContext } from '../../../../../../src/app/context/AppContext';
import { css, cx } from '../../../../../../styled-system/css';
import { stack } from '../../../../../../styled-system/recipes';
import Option from './Category';

export default function Select({ categories }: { categories: any[] }) {
  return (
    <select className={css({ top: '{spacing.side.v}', position: 'sticky' })}>
      {categories?.map((category) => {
        return <Option key={category.id} category={category} />;
      })}
    </select>
  );
}
