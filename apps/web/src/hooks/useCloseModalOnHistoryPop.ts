import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useCloseModalOnHistoryPop(props: { action: () => void }) {
  const router = useRouter();

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);

    const handlePopState = (event: PopStateEvent) => {
      window.history.pushState(null, document.title, window.location.href);
      // document.body.style.overflow = 'auto';
      props.action();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);
}
