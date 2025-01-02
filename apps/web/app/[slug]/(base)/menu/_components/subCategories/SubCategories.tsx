'use client';
import { useState } from 'react';
import { useMenuContext } from '../context/Context';
import { useAppContext } from '../../../../../../src/app/context/AppContext';

import { button, stack } from '../../../../../../styled-system/recipes';
import { cx, css } from '../../../../../../styled-system/css';
import SubCategoriesList from './SubCategoriesList';

export default function SubCategories() {
  const menuCtx = useMenuContext();
  const [selectedSubCategories, setSelectedSubCategories] = useState<{
    cat2: number | null;
    cat3: number | null;
    cat4: number | null;
  }>({
    cat2: null,
    cat3: null,
    cat4: null,
  });

  return (
    <>
      <SubCategoriesList
        parentCategoryId={menuCtx?.appSearchParams?.cat1}
        onSelect={(id) =>
          setSelectedSubCategories({
            ...selectedSubCategories,
            cat2: id,
            cat3: null,
            cat4: null,
          })
        }
      />
      <SubCategoriesList
        parentCategoryId={selectedSubCategories.cat2}
        onSelect={(id) =>
          setSelectedSubCategories({ ...selectedSubCategories, cat3: id, cat4: null })
        }
      />
      <SubCategoriesList
        parentCategoryId={selectedSubCategories.cat3}
        onSelect={(id) =>
          setSelectedSubCategories({ ...selectedSubCategories, cat4: id })
        }
      />
      <SubCategoriesList parentCategoryId={selectedSubCategories.cat4} />
    </>
  );
}
