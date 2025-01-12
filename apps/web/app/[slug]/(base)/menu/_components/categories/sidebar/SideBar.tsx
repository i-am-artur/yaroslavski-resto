'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { useAppContext } from '../../../../../../../src/app/context/AppContext';
import { css, cx } from '../../../../../../../styled-system/css';
import { button } from '../../../../../../../styled-system/recipes';
import { useMenuContext } from '../../context/Context';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const appCtx = useAppContext();
  const categories = appCtx?.categories.value ?? [];
  const menuCtx = useMenuContext();
  const pathname = usePathname();
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  console.log(
    '🚀 ~ file: SideBar.tsx:13 ~ selectedCategories:',
    menuCtx?.appSearchParams?.value
  );

  return (
    menuCtx?.appSearchParams?.value && (
      <div
        className={css({
          display: 'none',
          // position: 'fixed',
          sm: { display: 'block', maxWidth: '200px' },
        })}
      >
        {parseCategories(
          categories,
          null,
          0,
          selectedCategories,
          setSelectedCategories,
          pathname,
          menuCtx?.appSearchParams
        )}
      </div>
    )
  );
}

function parseCategories(
  categories: any[],
  parentCategoryId: number | null,
  level: number,
  selectedCategories: any[],
  setSelectedCategories: Dispatch<SetStateAction<any[]>>,
  pathname: string,
  appSearchParams: any
) {
  const subCategories = categories.filter((el) => el.parentId === parentCategoryId);
  if (subCategories.length === 0) return '';

  return (
    <ul>
      {subCategories.map((subCategory) => {
        const selected = selectedCategories.find(
          (el) => el.categoryId === subCategory.id
        );
        const searchParams = new URLSearchParams(
          Array.from(appSearchParams?.value?.entries() as URLSearchParams)
        );
        searchParams.delete('cat1');
        return (
          <li key={subCategory.id} style={{ paddingLeft: level * 5 }}>
            <NextLink
              href={(() => {
                searchParams.set('cat1', subCategory.id);
                return pathname + '?' + searchParams.toString();
              })()}
              className={cx(
                button({
                  color: 'primary',
                  variant: selected ? 'solid' : 'plain',
                }),
                css({
                  textAlign: 'start',
                  fontWeight: level === 0 ? 'bold' : 'normal',
                  // whiteSpace: 'nowrap',
                })
              )}
              onClick={() =>
                setSelectedCategories((pre) =>
                  pre
                    .filter((el) => el.level < level)
                    .concat({ categoryId: subCategory.id, level: level })
                )
              }
            >
              <span
                className={cx(
                  css({
                    fontSize: '1.1rem',
                  })
                )}
              >
                {subCategory.name['ua']}
              </span>
            </NextLink>
            {selected &&
              parseCategories(
                categories,
                subCategory.id,
                level + 1,
                selectedCategories,
                setSelectedCategories,
                pathname,
                appSearchParams
              )}
          </li>
        );
      })}
    </ul>
  );
}
