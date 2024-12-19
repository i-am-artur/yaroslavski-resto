'use client';
import NextLink from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import { qrContext } from '../../../(components)/QrContext';
import { CategorySelectT } from '../../../../../../src/instances/languages/translation/instances/languages/components/selectCategory/ua';
import CloseIconButton from '../../../../../../src/instances/ui/buttons/CloseIconButton';
import Modal from '../../../../../../src/instances/ui/modals/Modal';
import { css } from '../../../../../../styled-system/css';
import './index.css';
import Arrows from '../../../../../../src/instances/ui/icons/Arrows';

export default function MainCategorySelect(props: {
  open: boolean;
  onClose?: () => void;
  t: CategorySelectT;
  cat1: number;
}) {
  const qrCtx = useContext(qrContext);
  // const pageCtx = useContext(pageContext);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div
        className={css({
          height: '565px',
          right: 0,
          left: 0,
          bottom: 0,
          overflowY: 'scroll',
          padding: 'radius.xl',
          backgroundColor: 'white',
          borderTopLeftRadius: 'xl',
          borderTopRightRadius: 'xl',
          position: 'fixed',
          zIndex: 80,
          animation: 'from-bottom-animate .3s linear',
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            rowGap: 'box.v',
            border: 'none',
            fontSize: '1.3rem',
            fontWeight: 'bold',
          })}
        >
          <h2
            className={css({
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            })}
          >
            {props.t.selectCategory}
            <CloseIconButton onClick={props.onClose} />
          </h2>

          {qrCtx.categories.value
            .filter((el) => el.parentId === null)
            .map((category) => (
              <NextLink
                // href=''
                href={
                  pathname +
                  '?' +
                  searchParams
                    .toString()
                    .replace(`&cat1=${props.cat1}`, '')
                    .replace(`cat1=${props.cat1}`, '')
                    .concat(`&cat1=${category.id}`)
                }
                onClick={() => {
                  // pageCtx.setSelectedCategories({ cat1: category.id });
                  // const cat1 = pageCtx.searchParams.get('cat1');
                  // location.search = pageCtx.searchParams
                  //   .toString()
                  //   .replace(`cat1=${cat1}`, `cat1=${category.id}`);
                  props?.onClose?.();
                }}
                key={category.id}
              >
                <span
                  className={css({
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  })}
                >
                  {category.name[qrCtx.lang]} <Arrows />
                </span>
              </NextLink>
            ))}
        </div>
      </div>
    </Modal>
  );
}
