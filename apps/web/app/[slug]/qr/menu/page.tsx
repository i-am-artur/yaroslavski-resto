'use client';
import { Box } from '@repo/shared/src/styles/StyledComponents/components/Layouts';
import { useSearchParams } from 'next/navigation';
import { Suspense, useContext, useEffect, useState } from 'react';
import { qrContext } from '../(components)/QrContext';
import { css } from '../../../../styled-system/css';
import Products from './components/Products';
import { menuContext } from './components/Context';
import ScrollToTop from '../../../../src/instances/ui/buttons/ScrollToTop';

export default function Menu() {
  const qrCtx = useContext(qrContext);
  const searchParams = useSearchParams();
  const [oldSearchParam, setOldSearchParam] = useState(-1);
  const [structuredData, setStructuredData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // const [categories, setCategories] = useState<any>(qrCtx.categories.value);
  const menuCtx = useContext(menuContext);

  useEffect(() => {
    (async () => {
      const cat1 = (() => {
        const cat1Param = searchParams.get('cat1') ?? '2';
        const cat1Number = parseInt(cat1Param);
        return isNaN(cat1Number) ? 2 : cat1Number;
      })();

      if (!qrCtx.categories.loading && oldSearchParam !== cat1) {
        setLoading(true);

        // const categoriesTmp = [...categories];
        // setCategories([]);
        // menuCtx.setFilteredCategories(qrCtx.categories.value);
        setOldSearchParam(cat1);

        const products: any[] = await fetch(
          `${process.env.basePath}/assets/menuData/${cat1}.json`
        ).then((res) => res.json());

        const categoryProducts = products.filter((product) =>
          product.categories.includes(cat1)
        );
        const category = qrCtx.categories.value.find((el) => el.id === cat1);

        const topCategory = {
          ...category,
          products: categoryProducts,
        };

        setStructuredData([
          {
            ...topCategory,
            children: structureData(
              qrCtx.categories.value,
              cat1,
              products,
              menuCtx.setFilteredCategories
            ),
          },
        ]);
        setLoading(false);
      }
      // return () => {
      //   const categoriesTmp = [...categories];
      //   setCategories([]);
      //   qrCtx.categories.setCategories(categoriesTmp);
      // };
    })();
  }, [qrCtx.categories.loading, searchParams]);

  // useEffect(() => {
  //   if (categories.length === 0) {
  //     setCategories(qrCtx.categories.value);
  //   }
  // }, [qrCtx.categories.value]);

  return (
    <main
      className={css({
        backgroundColor: 'white',
        flex: '1',
      })}
    >
      {!loading
        ? parseCategoriesAndProducts(structuredData, 1, qrCtx.lang)
        : 'loading...'}
      <ScrollToTop />
    </main>
  );
}

function structureData(
  categories: any[],
  parentId: number | null,
  products: any[],
  setMenuCategories: any
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
      const children = structureData(categories, el.id, products, setMenuCategories);
      // console.log('🚀 ~ .map ~ children:', el, children);
      const childrenHaveProducts =
        children.some((el) => el.childrenHaveProducts) ||
        children.some((el) => el?.products?.length > 0);
      // console.log('🚀 ~ .map ~ childrenHaveProducts:', el, childrenHaveProducts);
      // const categoryProducts = products.some((el) => el.categories.includes(el.id));
      const categoryProducts = products.filter((product) =>
        product.categories.includes(el.id)
      );
      if (!childrenHaveProducts && categoryProducts.length === 0) {
        setMenuCategories((pre: any) =>
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
  lang: string
  // setCategories: any
) {
  if (!structuredData.length) return '';
  return (
    <ul className={css({ display: 'flex', flexDirection: 'column', rowGap: 'unit.v' })}>
      {structuredData.map((el, i) => {
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
                  el.children.length > 0 ? level * 43 + 35 : (level - 1) * 43 + 35,
                // el.children.length > 0 ? level * 43 + 65 : (level - 1) * 43 + 65,
              }}
              className={css({
                // display: 'none',
                height: 0,
                fontSize: '0px',
                // transitionTimingFunction: 'ease-out',
                fontWeight: 600,
              })}
            >
              {el.name[lang]}
            </Box>
            <Suspense>
              <Products list={el.products} lang={lang} />
            </Suspense>
            {parseCategoriesAndProducts(el.children, level + 1, lang)}
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
