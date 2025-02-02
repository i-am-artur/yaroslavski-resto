'use client';
import { css } from '../../../../../../styled-system/css';
import { useMenuContext } from '../context/Context';
import Product from './_product/Product';

export default function Products() {
  const menuCtx = useMenuContext();

  return menuCtx?.structuredData && menuCtx?.structuredData?.length > 0 ? (
    <div
      className={css({
        paddingBottom: '40px',
        width: '100%',
        sm: { paddingRight: 'side.h', overflowY: 'scroll', height: '87vh' },
      })}
    >
      {parseCategoriesAndProducts(menuCtx?.structuredData ?? [])}
    </div>
  ) : (
    'loading'
  );
}

function parseCategoriesAndProducts(structuredData: any[]) {
  if (structuredData.length === 0) return '';

  return (
    <ul>
      {structuredData.map((data) => {
        return (
          <li
            id={data.category.id}
            key={data.category.id}
            className={css({ marginTop: 'box.v', '&:first-child': { marginTop: 0 } })}
          >
            {data.products?.length > 0 && (
              <>
                <h2>{data.category.name['ua']}</h2>
                {data.products?.length > 0 && (
                  <ul>
                    {data.products.map((product: any, i: number) => (
                      <li
                        key={product.name['ua'] + i}
                        className={css({ marginTop: 'box.v' })}
                      >
                        <Product value={product} />
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
            {parseCategoriesAndProducts(data.subCategories)}
          </li>
        );
      })}
    </ul>
  );

  // structuredData.map((data, i) => {
  //   return (
  //     <ul key={data.category.id}>
  //       {data.products?.length > 0 ? (
  //         <li className={css({ marginTop: 'box.v', '&:first-child': { marginTop: 0 } })}>
  //           <h2 id={data.category.id}>{data.category.name['ua']}</h2>
  //         </li>
  //       ) : (
  //         <div id={data.category.id} />
  //       )}
  //       {data.products?.length > 0 && (
  //         <ul>
  //           {data.products.map((product: any, i: number) => (
  //             <li key={product.name['ua'] + i} className={css({ marginTop: 'box.v' })}>
  //               <Product value={product} />
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //       {parseCategoriesAndProducts(data.subCategories)}
  //     </ul>
  //   );
  // });
}

// function structureData(categories: any[], category: any, products: any[]): any {
//   const subCategories = categories.filter((el) => el.parentId === category.id);
//   const categoryProducts = products.filter((product) =>
//     product.categories.includes(category?.id)
//   );
//   const structuredSubCategories = subCategories.map((subCategory) =>
//     structureData(categories, subCategory, products)
//   );

//   return {
//     category,
//     products: categoryProducts,
//     subCategories: structuredSubCategories,
//     childrenHaveNoProducts: structuredSubCategories.every(
//       (el) => el.products.length === 0 && el.childrenHaveNoProducts
//     ),
//   };
// }
