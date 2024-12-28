import { ImgHTMLAttributes } from 'react';

export default function Logo(
  props: ImgHTMLAttributes<HTMLImageElement> & { lang: string }
) {
  const { lang, ...imgProps } = props;
  return (
    <img
      src={`${process.env.basePath}/assets/site/${props.lang === 'ua' ? 'logo.png' : 'logoEng.png'}`}
      alt='Restaurant Yaroslvaski logo'
      {...imgProps}
    />
  );
}
