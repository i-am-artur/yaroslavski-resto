import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { css } from '../../../../styled-system/css';
import Arrows from '../../../../src/ui/icons/Arrows';
import { lsSaveCategoryInfo } from '../../../../src/localStorage/category';

export default function Category({ category }: { category: any }) {
  const pathname = usePathname();
  const currentLanguage = pathname.split('/')?.[1] ?? 'ua';

  return (
    <li key={category.id}>
      <NextLink
        href={`/${currentLanguage}/menu?cat1=${category.id}`}
        onClick={() => {
          lsSaveCategoryInfo({ category: category.id });
        }}
        className={css({
          display: 'flex',
          fontSize: '1.5rem',
          fontWeight: 600,
          justifyContent: 'space-between',
          alignItems: 'center',
        })}
      >
        {category.name[currentLanguage]}
        <Arrows />
      </NextLink>
    </li>
  );
}
