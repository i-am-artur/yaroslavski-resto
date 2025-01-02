'use client';
import { useState } from 'react';
import { useAppContext } from '../../../../../../src/app/context/AppContext';
import { css, cx } from '../../../../../../styled-system/css';
import { button, stack } from '../../../../../../styled-system/recipes';

export default function SubCategoriesList(props: {
  parentCategoryId: number | null;
  onSelect?: (categoryId: number) => void;
}) {
  const appCtx = useAppContext();
  const [selected, setSelected] = useState<number | null>(null);
  const categories = appCtx?.categories.value ?? [];
  const filteredCategories = categories.filter(
    (el) => el.parentId === props.parentCategoryId
  );

  return (
    props.parentCategoryId !== null &&
    filteredCategories?.length > 0 && (
      <ul
        className={cx(
          stack({ dir: 'row', cGap: 'unit' }),
          css({ overflowX: 'scroll', scrollbarWidth: 'none' })
        )}
      >
        {filteredCategories.map((el: any, i: number) => {
          return (
            <li key={el.id}>
              <a
                href='#'
                onClick={() => {
                  props.onSelect?.(el.id);
                  setSelected(el.id);
                }}
                className={cx(
                  button({
                    variant: 'solid',
                    color: selected === el.id ? 'primary' : 'secondary',
                  }),
                  css({ whiteSpace: 'nowrap' })
                )}
              >
                {el.name['ua']}
              </a>
            </li>
          );
        })}
      </ul>
    )
  );
}
