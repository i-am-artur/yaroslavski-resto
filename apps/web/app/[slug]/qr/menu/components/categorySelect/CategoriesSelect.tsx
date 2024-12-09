'use client';
import { useSearchParams } from 'next/navigation';
import { Fragment, useContext, useEffect, useState } from 'react';
import { qrContext } from '../../../(components)/QrContext';
import { CategorySelectT } from '../../../../../../src/instances/languages/translation/instances/languages/components/selectCategory/ua';
import CategoriesSelectLarge from './CategoriesSelectLarge';
import CategoriesSelectSmall from './categoriesSelectSmall/CategoriesSelectSmall';
import { SelectedCategories } from './types';

export default function CategoriesSelect(props: { t: CategorySelectT }) {
  const ctx = useContext(qrContext);
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<SelectedCategories>({
    cat1: getCat1(),
    cat2: null,
    cat3: null,
    cat4: null,
  });

  function getCat1() {
    const cat1SearchParam = searchParams.get('cat1') ?? '';
    const cat1Num = parseInt(cat1SearchParam);
    return isNaN(cat1Num) ? 2 : cat1Num;
  }

  useEffect(() => {
    const cat1 = getCat1();
    if (cat1 !== selectedCategories.cat1) {
      setSelectedCategories({ cat1: cat1 });
    }
  }, [searchParams]);

  return (
    !ctx.categories.loading && (
      <Fragment>
        <CategoriesSelectSmall
          selectedCategories={selectedCategories}
          t={props.t}
          onChange={(selectedCategories) => setSelectedCategories(selectedCategories)}
        />
        <CategoriesSelectLarge
          selectedCategories={selectedCategories}
          t={props.t}
          onChange={(selectedCategories) => {
            setSelectedCategories(selectedCategories);
          }}
        />
      </Fragment>
    )
  );
}
