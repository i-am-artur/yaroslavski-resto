'use client';
import { usePathname } from 'next/navigation';
import { Fragment, Suspense, useState } from 'react';
import { css } from '../../../../styled-system/css';
import { languages } from '../data';
import { LanguageSelectT } from '../translation/instances/languages/components/languageSelect/ua';
import LanguageList from './languageList/LanguageList';
// import { createFFmpeg } from '@ffmpeg/ffmpeg';

export default function LanguageSelect(props: { t: LanguageSelectT }) {
  const [openLanguageList, setOpenLanguageList] = useState(false);
  const pathname = usePathname();

  return (
    <Fragment>
      <select
        aria-label='Language selection'
        defaultValue={pathname.split('/')[1]}
        className={css({
          marginLeft: 'auto',
          width: 'fit-content',
        })}
        onClick={(e) => {
          e.preventDefault();
          e.currentTarget.blur();
          window.focus();
          setOpenLanguageList(true);
        }}
      >
        {languages.map((language) => (
          <option key={language.id} value={language.id}>
            {language.id.toUpperCase()}
          </option>
        ))}
      </select>
      <Suspense>
        <LanguageList
          open={openLanguageList}
          onClose={() => setOpenLanguageList(false)}
          t={props.t}
        />
      </Suspense>
    </Fragment>
  );
}
