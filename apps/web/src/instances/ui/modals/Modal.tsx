'use client';
import { ReactNode, useEffect } from 'react';
import { css } from '../../../../styled-system/css';
import './index.css';
import { Box } from '@repo/shared/src/styles/StyledComponents/components/Layouts';
import useCloseModalOnHistoryPop from '../../../hooks/useCloseModalOnHistoryPop';

export default function Modal(props: {
  open: boolean;
  onClose?: () => void;
  children?: ReactNode | ReactNode[];
}) {
  props.onClose && useCloseModalOnHistoryPop({ action: props.onClose });
  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.open]);

  return (
    props.open && (
      <Box
        onClick={(e) => {
          if (e.target == e.currentTarget) props?.onClose?.();
        }}
        className={css({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'transparent.modal',
          zIndex: '20 !important',
        })}

        // className={cx(
        //   css({
        //     position: 'absolute',
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     bottom: 0,
        //     backgroundColor: 'transparent.modal',
        //   }),
        //   'modalBg'
        // )}
      >
        {props?.children}
      </Box>
    )
  );
}
