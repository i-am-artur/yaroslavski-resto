'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { useAppContext } from '../../../../../../../src/app/context/AppContext';
import { css, cx } from '../../../../../../../styled-system/css';
import { button } from '../../../../../../../styled-system/recipes';
import { useMenuContext } from '../../context/Context';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function Sidebar() {
  const appCtx = useAppContext();
  const categories = appCtx?.categories.value ?? [];
  const menuCtx = useMenuContext();
  const pathname = usePathname();
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const router = useRouter();

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
          menuCtx?.appSearchParams,
          router
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
  appSearchParams: any,
  router: AppRouterInstance
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
            <button
              // href={(() => {
              //   searchParams.set('cat1', subCategory.id);
              //   return pathname + '?' + searchParams.toString();
              // })()}
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
              onClick={() => {
                if (subCategory.parentId === null) {
                  searchParams.set('cat1', subCategory.id);
                  router.push(pathname + '?' + searchParams.toString());
                } else {
                  const element = document.getElementById('' + subCategory.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
                setSelectedCategories((pre) =>
                  pre
                    .filter((el) => el.level < level)
                    .concat({ categoryId: subCategory.id, level: level })
                );
              }}
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
            </button>
            {selected &&
              parseCategories(
                categories,
                subCategory.id,
                level + 1,
                selectedCategories,
                setSelectedCategories,
                pathname,
                appSearchParams,
                router
              )}
          </li>
        );
      })}
    </ul>
  );
}
