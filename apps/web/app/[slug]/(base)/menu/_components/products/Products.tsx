'use client';

import { useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { useAppContext } from '../../../../../../src/app/context/AppContext';

export default function Products() {
  const searchParams = useSearchParams();

  const appCtx = useAppContext();
  const categories = appCtx?.categories.value ?? [];
  const [structuredData, setStructuredData] = useState<any[]>([]);
  console.log('🚀 ~ file: Products.tsx:24 ~ structuredData:', structuredData);

  const cat1Param = searchParams.get('cat1') ?? '2';
  const cat1Number = parseInt(cat1Param);
  const cat1 = isNaN(cat1Number) ? 2 : cat1Number;

  useEffect(() => {
    (async () => {
      const products: any[] = await fetch(
        `${process.env.basePath}/assets/menuData/${cat1}.json`
      ).then((res) => res.json());
      const category = categories?.find((el) => el.id == cat1);
      // const structuredData = structureData(categories, category, products);
      // console.log('🚀 ~ file: Products.tsx:26 ~ structuredData:', structuredData);
      setStructuredData(structureData(categories, category, products));
    })();
  }, [cat1, categories]);

  // return '';
  // return JSON.stringify(structuredData);
  return parseCategoriesAndProducts(structuredData);
}

function parseCategoriesAndProducts(structuredData: any[]) {
  console.log('🚀 ~ file: Products.tsx:37 ~ structuredData:', structuredData);

  return (
    structuredData?.length > 0 &&
    structuredData?.map((data, i) => {
      return (
        <div key={data?.category?.name['ua'] + Math.random()}>
          <h2>{data?.category?.name['ua']}</h2>

          {/* {data.products?.length > 0 && (
            <>
              // <h2>{data.category.name['ua']}</h2>
              <ul>
                {data.products.map((product: any) => (
                  <li key={product.name['ua']}>{product.name['ua']}</li>
                ))}
              </ul>
            </>
          )} */}
          {parseCategoriesAndProducts(data.subCategories)}
        </div>
      );
    })
  );
}

function structureData(categories: any[], category: any, products: any[]): any {
  const subCategories = categories.filter((el) => el.parentId === category.id);
  const categoryProducts = products.filter((product) =>
    product.categories.includes(category?.id)
  );
  const structuredSubCategories = subCategories.map((subCategory) =>
    structureData(categories, subCategory, products)
  );

  return [
    {
      category,
      products: categoryProducts,
      subCategories: structuredSubCategories,
      childrenHaveNoProducts: structuredSubCategories.every(
        (el) => el[0].products.length === 0 && el[0].childrenHaveNoProducts
      ),
    },
  ];
}
