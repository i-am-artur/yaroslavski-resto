// 'use client';
import { css } from '../../../../../styled-system/css';
export default function Products(props: { list: any[]; lang: string }) {
  return (
    props.list.length > 0 && (
      <ul
        className={css({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        {props.list.map((product: any, i: number) => {
          return (
            <li key={product.name.en + i} className={css({ paddingBottom: 'unit.v' })}>
              <div
                title='divider'
                className={css({
                  marginTop: 'unit.v',
                  marginBottom: 'item.v',
                  height: 1,
                  width: '100%',
                  backgroundColor: '#ccc',
                })}
              />
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: 'unit.v',
                })}
              >
                <div
                  className={css({
                    flex: 1,
                    rowGap: 'unit.v',
                    display: 'flex',
                    flexDirection: 'column',
                  })}
                >
                  <div className={css({ fontWeight: 500 })}>
                    {product.name[props.lang]}
                  </div>
                  {product.price.qr.length > 0 && (
                    <ul>
                      {product.price.qr.map((el: any) => {
                        return (
                          <li
                            key={el.capacity}
                            className={css({
                              fontSize: '1.2rem',
                            })}
                          >
                            {el.capacity}{' '}
                            {(() => {
                              switch (product.capacityUnit) {
                                case 'g':
                                  return props.lang === 'ua' ? 'гр' : 'g';
                                case 'ball':
                                  return props.lang === 'ua' ? 'кулька' : 'ball';
                                case 'ml':
                                  return props.lang === 'ua' ? 'мл' : 'ml';
                                case 'qty':
                                  return props.lang === 'ua' ? 'шт' : 'qty';
                                default:
                                  return '';
                              }
                            })()}{' '}
                            -{' '}
                            <span
                              className={css({
                                fontWeight: 500,
                              })}
                            >
                              {el.value} &#8372;
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  <div className={css({ fontSize: '14px', color: '#808080' })}>
                    {product.description[props.lang]}
                  </div>
                </div>
                <img
                  src={(function () {
                    // if (!Array.isArray(product.image))
                    //   return `${process.env.basePath}/assets/site/food1.gif`;

                    return product.image?.thumb
                      ? `${process.env.basePath}/assets/products/images/${product.image.thumb}`
                      : `${process.env.basePath}/assets/site/food1.gif`;
                  })()}
                  width='100'
                  height='100'
                  className={css({
                    borderRadius: 'std',
                    // opacity: 0.3,
                  })}
                  alt={product.description[props.lang]}
                  loading='lazy'
                />
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
}
