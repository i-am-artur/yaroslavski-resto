'use client';
import NextLink from 'next/link';
import { css } from '../../../../../../styled-system/css';
import { usePathname } from 'next/navigation';
import { button } from '../../../../../../styled-system/recipes';

export default function CategoriesList(props: {
  list: any;
  selectedCategory: any;
  onSelect: (categoryId: number) => void;
}) {
  const lang = usePathname().split('/')[1];

  return (
    <ul
      className={css({
        columnGap: 'unit.h',
        rowGap: 'unit.v',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollbarWidth: 'none',
      })}
    >
      {props.list.map((category: any) => {
        return (
          <li key={category.id}>
            <NextLink
              href={'#' + category.id}
              className={button({
                variant: 'solid',
                color:
                  category.id === props.selectedCategory?.id ? 'primary' : 'secondary',
              })}
              onClick={() => {
                props.onSelect(category);
              }}
            >
              {category?.name[lang ?? 'ua']}
            </NextLink>
          </li>
        );
      })}
    </ul>
  );
}
