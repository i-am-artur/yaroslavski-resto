'use client';
import { Suspense } from 'react';
import CloseIconButton from '../../../../../../../../src/ui/buttons/CloseIconButton';
import Modal from '../../../../../../../../src/ui/modals/Modal';
import { css, cx } from '../../../../../../../../styled-system/css';
import s from './index.module.css';
import MainCategories from './MainCategories';
import { MenuT } from '../../../../../../../../src/languages/translation/app/menu/ua';

export default function SelectMainCategories(props: {
  open: boolean;
  onSelect?: () => void;
  t: MenuT;
  categories: any[];
}) {
  return (
    <Modal open={props.open} onClose={props.onSelect}>
      <div
        className={cx(
          s.animation,
          css({
            right: 0,
            left: 0,
            bottom: 0,
            padding: 'box.h',
            height: '78%',
            position: 'fixed',
            overflowY: 'auto',
            backgroundColor: 'white',
            borderTopLeftRadius: 'xl',
            borderTopRightRadius: 'xl',
            zIndex: 100,
          })
        )}
      >
        <h2
          className={css({
            marginBottom: 'item.v',
            justifyContent: 'space-between',
            display: 'flex',
            fontSize: '1.5rem',
          })}
        >
          {props.t.selectCategory}
          <CloseIconButton onClick={props.onSelect} />
        </h2>

        <ul>
          {/* <Suspense> */}
          <MainCategories categories={props.categories} onSelect={props?.onSelect} />
          {/* </Suspense> */}
        </ul>
      </div>
    </Modal>
  );
}
