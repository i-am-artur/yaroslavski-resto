'use client';
import { card } from '@repo/shared/styled-system/recipes';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { qrContext } from '../../(components)/QrContext';
import { css, cx } from '../../../../../styled-system/css';
import Arrows from '../../../../../src/instances/ui/icons/Arrows';

export default function ClientPage() {
  const pathname = usePathname();
  const qrCtx = useContext(qrContext);
  const currentLanguage = pathname.split('/')?.[1] ?? 'ua';

  return (
    <main className={cx(card(), css({ sm: { width: '50%' } }))}>
      <nav>
        <ul
          className={css({
            display: 'flex',
            flexDirection: 'column',
            rowGap: 'item.v',
          })}
        >
          {!qrCtx.categories.loading
            ? qrCtx.categories.value
                .filter((elToFilter) => elToFilter.parentId === null)
                .map((category) => {
                  return (
                    <li key={category.id}>
                      <NextLink
                        href={`/${currentLanguage}/qr/menu?cat1=${category.id}${(() => {
                          const searchParams = location.search.substring(1);
                          return searchParams.length > 0 ? `&${searchParams}` : '';
                        })()}`}
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
                })
            : 'loading...'}
        </ul>
      </nav>
    </main>
  );
}
