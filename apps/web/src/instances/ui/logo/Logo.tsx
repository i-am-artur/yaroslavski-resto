export default function Logo(props: {
  lang: string;
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <img
      src={`${process.env.basePath}/assets/site/${props.lang === 'ua' ? 'logo.png' : 'logoEng.png'}`}
      alt='Restaurant Yaroslvaski logo'
      className={props?.className}
      width={props?.width}
      height={props?.height}
    />
  );
}
