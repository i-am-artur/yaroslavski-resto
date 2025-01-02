'use client';
// import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../../../../src/app/context/AppContext';
import { useMenuContext, useMenuContextDispatch } from '../context/Context';
import Product from './_product/Product';
import { css } from '../../../../../../styled-system/css';

export default function Products() {
  // const searchParams = useSearchParams();
  const menuCtx = useMenuContext();
  const appCtx = useAppContext();
  const menuCtxDispatch = useMenuContextDispatch();
  const categories = appCtx?.categories.value ?? [];
  const [structuredData, setStructuredData] = useState<any[]>([]);
  const cat1 = menuCtx?.appSearchParams?.cat1;

  // const cat1 = (() => {
  //   const cat1Param = searchParams.get('cat1') ?? '2';
  //   const cat1Number = parseInt(cat1Param);
  //   return isNaN(cat1Number) ? 2 : cat1Number;
  // })();

  // useEffect(() => {
  //   (async () => {
  //     if (categories?.length > 0) {
  //       const productsRes = await fetch(
  //         `${process.env.basePath}/assets/menuData/${cat1}.json`
  //       );
  //       const products = await productsRes.json();
  //       menuCtxDispatch?.setProducts(products);
  //       const category = categories?.find((el) => el.id == cat1);
  //       setStructuredData([structureData(categories, category, products)]);
  //     }
  //   })();
  // }, [cat1, categories]);

  return menuCtx ? parseCategoriesAndProducts(menuCtx?.structuredData) : '';
}

function parseCategoriesAndProducts(structuredData: any[]) {
  return structuredData.map((data, i) => {
    return (
      <ul key={data.category.id}>
        {data.products?.length > 0 ? (
          <h2 className={css({ marginTop: 'box.v' })}>{data.category.name['ua']}</h2>
        ) : (
          <div id={data.category.id} />
        )}
        {data.products?.length > 0 && (
          <ul>
            {data.products.map((product: any, i: number) => (
              <li key={product.name['ua'] + i} className={css({ marginTop: 'box.v' })}>
                <Product value={product} />
              </li>
            ))}
          </ul>
        )}
        {parseCategoriesAndProducts(data.subCategories)}
      </ul>
    );
  });
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
