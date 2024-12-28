'use client';
import { useAppContext } from '../../../../../../src/app/context/AppContext';
import { css, cx } from '../../../../../../styled-system/css';
import { stack } from '../../../../../../styled-system/recipes';
import Option from './Category';

export default function Select({ categories }: { categories: any[] }) {
  return (
    <div
      className={css({
        padding: '{spacing.side.v} 0',
        top: '0',
        position: 'sticky',
        backgroundColor: 'white',
      })}
    >
      <select
        className={css({
          width: '100%',
        })}
      >
        {categories?.map((category) => {
          return <Option key={category.id} category={category} />;
        })}
      </select>
    </div>
  );
}
