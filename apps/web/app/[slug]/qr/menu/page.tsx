'use client';
import { Box } from '@repo/shared/src/styles/StyledComponents/components/Layouts';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { qrContext } from '../(components)/QrContext';
import { css } from '../../../../styled-system/css';
import Products from './components/Products';
import { EOL } from 'os';
import { Metadata } from 'next';

export default function Menu() {
  const qrCtx = useContext(qrContext);
  const searchParams = useSearchParams();
  const [oldSearchParam, setOldSearchParam] = useState(-1);
  const [structuredData, setStructuredData] = useState<any[]>([]);
  console.log('🚀 ~ Menu ~ structuredData1:', structuredData);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const cat1 = (() => {
        const cat1Param = searchParams.get('cat1') ?? '2';
        const cat1Number = parseInt(cat1Param);
        return isNaN(cat1Number) ? 2 : cat1Number;
      })();
      if (categories.length > 0 && oldSearchParam !== cat1) {
        setLoading(true);

        const categoriesTmp = [...categories];
        setCategories([]);
        qrCtx.categories.setCategories(categoriesTmp);

        setOldSearchParam(cat1);
        const products: any[] = await fetch(
          `${process.env.basePath}/assets/menuData/${cat1}.json`
        ).then((res) => res.json());
        console.log('🚀 ~ products:', products);

        setStructuredData(
          structureData(categories, cat1, products, qrCtx.categories.setCategories)
        );
        setLoading(false);
      }
      return () => {
        const categoriesTmp = [...categories];
        setCategories([]);
        qrCtx.categories.setCategories(categoriesTmp);
      };
    })();
  }, [categories, searchParams]);

  useEffect(() => {
    if (categories.length === 0) {
      setCategories(qrCtx.categories.value);
    }
  }, [qrCtx.categories.value]);

  return (
    <main
      className={css({
        backgroundColor: 'white',
        flex: '1',
      })}
    >
      {!loading
        ? parseCategoriesAndProducts(
            structuredData,
            1,
            qrCtx.lang,
            qrCtx.categories.setCategories
          )
        : 'loading...'}
    </main>
  );
}

function structureData(
  categories: any[],
  parentId: number | null,
  products: any[],
  setQrCategories: any
) {
  // if(parentId === null){
  //   return products.filter((product) => product.categories.includes(parentId));
  // }

  // const topCategory = categories.find((el) => el.id === parentId && el.parentId === null);
  // if (!!topCategory) {
  //   const topCategoryProducts = products.filter((product) =>
  //     product.categories.includes(parentId)
  //   );
  //   const children = structureData(categories, parentId, products, setQrCategories);
  //   // console.log('🚀 ~ .map ~ children:', el, children);
  //   const childrenHaveProducts =
  //     children.some((el) => el.childrenHaveProducts) ||
  //     children.some((el) => el?.products?.length > 0);

  //   return {
  //     // ...el,

  //     products: topCategoryProducts,
  //     children,
  //     childrenHaveProducts: true,
  //   };
  // }

  const subCategories = categories.filter((el) => el.parentId === parentId);
  if (subCategories.length === 0) return [];

  return subCategories
    .sort((a, b) => a.parentId - b.parentId)
    .map((el: any): any => {
      const children = structureData(categories, el.id, products, setQrCategories);
      // console.log('🚀 ~ .map ~ children:', el, children);
      const childrenHaveProducts =
        children.some((el) => el.childrenHaveProducts) ||
        children.some((el) => el?.products?.length > 0);
      // console.log('🚀 ~ .map ~ childrenHaveProducts:', el, childrenHaveProducts);
      // const categoryProducts = products.some((el) => el.categories.includes(el.id));
      const categoryProducts = products.filter((product) =>
        product.categories.includes(el.id)
      );
      console.log('🚀 ~ .map ~ categoryProducts:', el, categoryProducts);
      if (!childrenHaveProducts && categoryProducts.length === 0) {
        setQrCategories((pre: any) =>
          pre.filter((elToFilter: any) => elToFilter.id !== el.id)
        );
        return {
          ...el,
          empty: true,
        };
      }

      return {
        ...el,
        products: categoryProducts,
        children,
        childrenHaveProducts: childrenHaveProducts,
      };
    });
}

function parseCategoriesAndProducts(
  structuredData: any[],
  level: number,
  lang: string,
  setCategories: any
) {
  if (!structuredData.length) return '';
  return (
    <ul className={css({ display: 'flex', flexDirection: 'column', rowGap: 'unit.v' })}>
      {structuredData.map((el, i) => {
        console.log('🚀 ~ {structuredData.map ~ el:', el);
        // const productsExist = productsSome(el);
        // if (el.empty) {
        //   setCategories((pre: any) =>
        //     pre.filter((elToFilter: any) => elToFilter.id !== el.id)
        //   );
        // }
        if (el.empty) return '';

        return (
          <li
            key={el.name + i}
            className={css({
              display: 'flex',
              flexDirection: 'column',
              rowGap: 'unit.v',
            })}
          >
            <Box
              id={el.id}
              $sx={{
                scrollMarginTop:
                  el.children.length > 0 ? level * 43 + 110 : (level - 1) * 43 + 110,
                // scrollMarginTop: level * 43 + 120,
              }}
              className={css({
                fontSize: '1.5rem',
                transitionTimingFunction: 'ease-out',
                fontWeight: 600,
              })}
            >
              {el.name[lang]}
            </Box>
            <Products list={el.products} lang={lang} />
            {parseCategoriesAndProducts(el.children, level + 1, lang, setCategories)}
          </li>
        );
      })}
    </ul>
  );
}

// function productsSome(structuredData: any[]) {
//   if (structuredData?.empty || structuredData.length === 0) return false;
//   // @ts-ignore
//   if (structuredData.products.length > 0) return true;
//   // @ts-ignore
//   return structuredData.children.some((el) => productsSome(el));
// }

// const metadata: Metadata = {
//   title: {
//     absolute: 'Меню ресторана',
//   },
//   description: '',
//   // TODO: do not forget to add description
// };
