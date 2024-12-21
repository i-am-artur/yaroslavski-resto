import { useEffect } from 'react';

export default function useCloseModalOnHistoryPop(props: { action: () => void }) {
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);

    const handlePopState = (event: PopStateEvent) => {
      window.history.pushState(null, document.title, window.location.href);
      props.action();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
}
