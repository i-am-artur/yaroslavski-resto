'use client';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import Arrows from '../../../../../../../../src/ui/icons/Arrows';
import { css } from '../../../../../../../../styled-system/css';
import { useMenuContext } from '../../../context/Context';

export default function MainCategories(props: {
  categories: any[];
  onSelect?: () => void;
}) {
  const menuCtx = useMenuContext();
  const pathname = usePathname();
  const lang = pathname.split('/')[1] ?? 'ua';
  const searchParams = new URLSearchParams(
    Array.from(menuCtx?.appSearchParams?.value.entries() as URLSearchParams)
  );
  searchParams.delete('cat1');

  return props.categories
    .filter((el) => el.parentId === null)
    .map((category) => (
      <li key={category.id}>
        <NextLink
          href={(() => {
            searchParams.set('cat1', category.id);
            return pathname + '?' + searchParams.toString();
          })()}
          onClick={() => {
            props?.onSelect?.();
          }}
          className={css({
            marginTop: 'item.v',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            fontSize: '1.3rem',
          })}
        >
          {category.name[lang]} <Arrows />
        </NextLink>
      </li>
    ));
}
