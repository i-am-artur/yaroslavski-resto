'use client';
import { ReactNode, useEffect } from 'react';
import { css } from '../../../styled-system/css';
import './index.css';
import { useRouter } from 'next/navigation';
// import useCloseModalOnHistoryPop from '../../../hooks/useCloseModalOnHistoryPop';

export default function Modal(props: {
  open: boolean;
  onClose?: () => void;
  children?: ReactNode | ReactNode[];
}) {
  const router = useRouter();
  // props.onClose && useCloseModalOnHistoryPop({ action: props.onClose });
  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.open]);

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    const handlePopState = (event: PopStateEvent) => {
      window.history.pushState(null, document.title, window.location.href);
      props.onClose?.();
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  return (
    props.open && (
      <div
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
          zIndex: '20',
        })}
      >
        {props?.children}
      </div>
    )
  );
}
