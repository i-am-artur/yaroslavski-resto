import { css } from '../../../styled-system/css';

export default function Logo(props: { lang: string }) {
  return (
    <img
      src={`${process.env.basePath}/assets/site/${props.lang === 'ua' ? 'logo.png' : 'logoEng.png'}`}
      alt='Restaurant Yaroslvaski logo'
      width='100%'
      // className={css({ width: '100%' })}
      // width={props?.width}
      // height={props?.height}
    />
  );
}
