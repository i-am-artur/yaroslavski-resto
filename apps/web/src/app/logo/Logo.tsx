import { ImgHTMLAttributes } from 'react';

export default function Logo(
  props: ImgHTMLAttributes<HTMLImageElement> & { lang: string }
  // imgProps?: Omit<HTMLImageElement, 'src' | 'alt' | 'crossOrigin' | 'fetchPriority'>;
  // imgProps?: ImgHTMLAttributes<HTMLImageElement> ;
) {
  // const { width, ...imgProps } = props?.imgProps ?? { width: '100%' };
  const { lang, ...imgProps } = props;
  return (
    <img
      src={`${process.env.basePath}/assets/site/${props.lang === 'ua' ? 'logo.png' : 'logoEng.png'}`}
      alt='Restaurant Yaroslvaski logo'
      // width={width}
      {...imgProps}
    />
  );
}
