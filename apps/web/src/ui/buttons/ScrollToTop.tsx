'use client';
import { useEffect, useState } from 'react';
import { css, cx } from '../../../styled-system/css';
import { button } from '@repo/shared/styled-system/recipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

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
        button({ variant: 'solid', color: 'primary' }),
        css({
          display: visible ? 'initial' : 'none',
          width: 50,
          height: 50,
          position: 'fixed',
          bottom: 30,
          right: 20,
          // fontSize: '1.8rem',
          // lineHeight: 0,
          // fontWeight: 'bold',
          border: 0,
          // color: 'white',
          borderRadius: '50%',
          // backgroundColor: 'primary',
          backgroundColor: '#b67f7f',
          // rotate: '-90deg',
        })
      )}
      onClick={() => {
        window.scrollTo({
          top: 0,
        });
      }}
    >
      {/* &#10140; */}
      <FontAwesomeIcon icon={faAngleUp} size='2x' />
    </button>
  );
}
