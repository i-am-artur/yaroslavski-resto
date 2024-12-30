'use client';

// import { useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { useAppContext } from '../../../../../../src/app/context/AppContext';
import Product from './_product/Product';
import { useSearchParams } from 'next/navigation';

export default function Products() {
  const searchParams = useSearchParams();
  // const [cat1, setCat1] = useState(-1);
  const [loading, setLoading] = useState(true);
  const cat1Param = searchParams.get('cat1') ?? '2';
  const cat1Parse = parseInt(cat1Param);
  const cat1Num = isNaN(cat1Parse) ? 2 : cat1Parse;

  const appCtx = useAppContext();
  const categories = appCtx?.categories.value ?? [];
  const [structuredData, setStructuredData] = useState<any>(null);
  console.log('🚀 ~ file: Products.tsx:16 ~ structuredData:', structuredData);

  useEffect(() => {
    (async () => {
      // const cat1Param = searchParams.get('cat1') ?? '2';
      // const cat1Parse = parseInt(cat1Param);
      // const cat1Num = isNaN(cat1Parse) ? 2 : cat1Parse;
      // if (cat1Num !== cat1) {
      //   setLoading(true);
      //   setCat1(cat1Num);

      const products: any[] = await fetch(
        `${process.env.basePath}/assets/menuData/${cat1Num}.json`
      ).then((res) => res.json());

      const reducedData = products.reduce((acc, curr) => {
        const category = curr.categories[0];
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(curr);
        return acc;
      }, {});

      setStructuredData(Object.entries(reducedData));
      setLoading(false);
      // }

      // const category = categories?.find((el) => el.id == cat1);
      // const structuredData = structureData(categories, category, products);
      // console.log('🚀 ~ file: Products.tsx:26 ~ structuredData:', structuredData);
      // setStructuredData(structureData(categories, category, products));
    })();
  }, [cat1Num]);

  // return '';
  // return JSON.stringify(structuredData[0]);
  {
    /* <Product key={product.name['ua'] + i} product={product} /> */
  }

  return loading ? (
    ''
  ) : (
    <ul>
      {structuredData.map((el: any) => {
        return (
          <li key={el[0]}>
            {el[0]}
            <ul>
              {el[1].map((product: any, i: number) => (
                <Product key={product.name['ua'] + i} product={product} />
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );

  // return structuredData.entries().map((el) => {
  //   return JSON.stringify(el);
  // });
  // return parseCategoriesAndProducts(structuredData);

  // return structuredData.map((el) => <ul>
  //   {el.}
  // </ul>);
}

// function parseCategoriesAndProducts(structuredData: any[]) {
//   console.log('🚀 ~ file: Products.tsx:37 ~ structuredData:', structuredData);

//   return (
//     structuredData?.length > 0 &&
//     structuredData?.map((data, i) => {
//       return (
//         <div key={data?.category?.name['ua'] + Math.random()}>
//           <h2>{data?.category?.name['ua']}</h2>

//           {/* {data.products?.length > 0 && (
//             <>
//               // <h2>{data.category.name['ua']}</h2>
//               <ul>
//                 {data.products.map((product: any) => (
//                   <li key={product.name['ua']}>{product.name['ua']}</li>
//                 ))}
//               </ul>
//             </>
//           )} */}
//           {parseCategoriesAndProducts(data.subCategories)}
//         </div>
//       );
//     })
//   );
// }

// function structureData(categories: any[], category: any, products: any[]): any {
//   const subCategories = categories.filter((el) => el.parentId === category.id);
//   const categoryProducts = products.filter((product) =>
//     product.categories.includes(category?.id)
//   );
//   const structuredSubCategories = subCategories.map((subCategory) =>
//     structureData(categories, subCategory, products)
//   );

//   return [
//     {
//       category,
//       products: categoryProducts,
//       subCategories: structuredSubCategories,
//       childrenHaveNoProducts: structuredSubCategories.every(
//         (el) => el[0].products.length === 0 && el[0].childrenHaveNoProducts
//       ),
//     },
//   ];
// }
