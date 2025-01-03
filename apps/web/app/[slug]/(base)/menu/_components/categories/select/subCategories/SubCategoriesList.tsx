'use client';
import { useLayoutEffect, useState } from 'react';
import { useAppContext } from '../../../../../../../../src/app/context/AppContext';
import { css, cx } from '../../../../../../../../styled-system/css';
import { button, stack } from '../../../../../../../../styled-system/recipes';

export default function SubCategoriesList(props: {
  parentCategoryId: number | null;
  level: number;
  onSelect?: (categoryId: number) => void;
}) {
  const appCtx = useAppContext();
  const [clicked, setClicked] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const categories = appCtx?.categories.value ?? [];
  const filteredCategories = categories.filter(
    (el) => el.parentId === props.parentCategoryId
  );

  useLayoutEffect(() => {
    if (selected) {
      const categoryEl = document.getElementById('' + selected);
      const categoryElTop = categoryEl?.getBoundingClientRect()?.top ?? 0;

      const categoriesSelector = document.getElementById('categories-selector');
      const heightCategoriesSelector = categoriesSelector?.offsetHeight;

      const y = window.scrollY + (categoryElTop ?? 0) - (heightCategoriesSelector ?? 0);

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [clicked, selected]);

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
              <button
                onClick={() => {
                  props.onSelect?.(el.id);
                  setSelected(el.id);
                  setClicked((pre) => pre + 1);
                  // const categoryEl = document.getElementById(el.id);
                  // const categoryElTop = categoryEl?.getBoundingClientRect()?.top;

                  // const categoriesSelector =
                  //   document.getElementById('categories-selector');
                  // const heightCategoriesSelector = categoriesSelector?.offsetHeight;

                  // console.log(
                  //   '🚀 ~ file: SubCategoriesList.tsx:39 ~ heightCategoriesSelector:',
                  //   heightCategoriesSelector,
                  //   categoryEl?.getBoundingClientRect()?.top,
                  //   window.scrollY
                  // );

                  // const y =
                  //   window.scrollY +
                  //   (categoryElTop ?? 0) -
                  //   (heightCategoriesSelector ?? 0);

                  // window.scrollTo({ top: y, behavior: 'smooth' });
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
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
}
