'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import { qrContext } from '../../../(components)/QrContext';
import { CategorySelectT } from '../../../../../../src/instances/languages/translation/instances/languages/components/selectCategory/ua';
import { css, cx } from '../../../../../../styled-system/css';
import { SelectedCategories } from './types';
import { button } from '../../../../../../styled-system/recipes';
import { Box } from '@repo/shared/src/styles/StyledComponents/components/Layouts';
import { unit } from '@repo/shared/src/styles/js/vars/layouts';
import NextLink from 'next/link';

export default function CategoriesSelectLarge(props: {
  selectedCategories: SelectedCategories;
  onChange?: (selectedCategories: SelectedCategories) => void;
  t: CategorySelectT;
}) {
  const ctx = useContext(qrContext);
  const lang = usePathname().split('/')[1] ?? 'ua';
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div
      className={css({
        display: 'none',
        sm: {
          display: 'block',
          minWidth: '180px',
          '& > ul': {
            position: 'fixed',
            maxWidth: '200px',
          },
        },
      })}
    >
      {!ctx.categories.loading &&
        parseCategories({
          categories: ctx.categories.value,
          lang: lang,
          parentId: null,
          level: 1,
          selectedCategories: props.selectedCategories,
          onChange: (cats) => props?.onChange?.(cats),
          pathname,
          searchParams,
        })}
    </div>
  );
}

function parseCategories(props: {
  categories: any[];
  lang: string;
  parentId: number | null;
  level: number;
  selectedCategories: SelectedCategories;
  onChange?: (selectedCategories: SelectedCategories) => void;
  pathname: any;
  searchParams: any;
}) {
  if (props.categories.length === 0) return '';

  return (
    <ul>
      {props.categories
        .filter((el) => el.parentId === props.parentId)
        .map((el) => {
          const selected = [
            props.selectedCategories.cat1,
            props.selectedCategories.cat2,
            props.selectedCategories.cat3,
          ].includes(el.id);
          return (
            <li key={el.id}>
              <Box
                as={NextLink}
                href={
                  props.level === 1
                    ? (function () {
                        return (
                          props.pathname +
                          '?' +
                          props.searchParams
                            .toString()
                            .replace(
                              `cat1=${props.selectedCategories.cat1}`,
                              `cat1=${el.id}`
                            )
                        );
                      })()
                    : '#' + el.id
                }
                $sx={{ paddingLeft: props.level * unit.gap.v }}
                className={cx(
                  button({
                    variant: props.selectedCategories.cat1 === el.id ? 'solid' : 'plain',
                    color: selected ? 'primary' : 'secondary',
                  }),
                  css({
                    fontWeight: selected ? '600' : '400',
                    whiteSpace: 'break-spaces',
                  })
                )}
                onClick={() => {
                  const cat = 'cat' + props.level;
                  props.onChange?.({ ...props.selectedCategories, [cat]: el.id });
                  // props.onChange?.({ cat1: el.id });
                }}
              >
                {el.name?.[props.lang]}
              </Box>
              {[
                props.selectedCategories.cat1,
                props.selectedCategories.cat2,
                props.selectedCategories.cat3,
              ].includes(el.id) &&
                parseCategories({
                  categories: props.categories,
                  lang: props.lang,
                  parentId: el.id,
                  selectedCategories: props.selectedCategories,
                  level: props.level + 1,
                  onChange: props?.onChange,
                  pathname: null,
                  searchParams: null,
                })}
            </li>
          );
        })}
    </ul>
  );
}
