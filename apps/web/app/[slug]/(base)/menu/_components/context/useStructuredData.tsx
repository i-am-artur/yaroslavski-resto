'use client';

import { useEffect, useState } from 'react';
import { useAppContext } from '../../../../../../src/app/context/AppContext';

export default function useStructuredData({ cat1 }: { cat1: number }) {
  const appCtx = useAppContext();
  const categories = appCtx?.categories.value ?? [];
  const [structuredData, setStructuredData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      if (categories?.length > 0 && !!cat1) {
        const productsRes = await fetch(
          `${process.env.basePath}/assets/menuData/${cat1}.json`
        );
        const products = await productsRes.json();
        // menuCtxDispatch?.setProducts(products);
        const category = categories?.find((el) => el.id == cat1);
        setStructuredData([structureData(categories, category, products)]);
        // setStructuredData([structureData(categories, category, products)]);
      }
    })();
  }, [cat1, categories]);

  return structuredData;
}

function structureData(categories: any[], category: any, products: any[]): any {
  const subCategories = categories.filter((el) => el.parentId === category.id);
  const categoryProducts = products.filter((product) =>
    product.categories.includes(category?.id)
  );
  const structuredSubCategories = subCategories.map((subCategory) =>
    structureData(categories, subCategory, products)
  );

  return {
    category,
    products: categoryProducts,
    subCategories: structuredSubCategories,
    childrenHaveNoProducts: structuredSubCategories.every(
      (el) => el.products.length === 0 && el.childrenHaveNoProducts
    ),
  };
}
