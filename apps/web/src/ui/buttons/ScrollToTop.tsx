'use client';
import { useEffect, useState } from 'react';
import { css, cx } from '../../../../styled-system/css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className={cx(
        css({
          display: visible ? 'inline-block' : 'none',
          width: 60,
          height: 60,
          position: 'fixed',
          bottom: 30,
          right: 20,
          fontSize: '1.8rem',
          lineHeight: 0,
          // fontWeight: 'bold',
          border: 0,
          color: 'white',
          borderRadius: '50%',
          backgroundColor: 'primary',
          rotate: '-90deg',
        })
      )}
      onClick={() => {
        window.scrollTo({
          top: 0,
        });
      }}
    >
      &#10140;
    </button>
  );
}
