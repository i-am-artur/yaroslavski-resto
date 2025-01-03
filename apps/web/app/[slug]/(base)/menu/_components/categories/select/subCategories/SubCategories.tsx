'use client';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useMenuContext } from '../../../context/Context';
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

  useEffect(() => {
    setSelectedSubCategories({ cat2: null, cat3: null, cat4: null });

    //   const yOffset = 0;
  }, [menuCtx?.appSearchParams?.cat1]);

  // useLayoutEffect(() => {
  //   const yOffset = 0;
  //   const y =
  //     (document.getElementById('categories-selector')?.getBoundingClientRect()?.top ??
  //       0) +
  //     window.scrollY +
  //     yOffset;
  //   window.scrollTo({ top: y, behavior: 'smooth' });
  // }, [selectedSubCategories]);

  return (
    <>
      {menuCtx?.appSearchParams?.cat1 && (
        <SubCategoriesList
          level={1}
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
      )}
      {selectedSubCategories.cat2 && (
        <SubCategoriesList
          level={2}
          parentCategoryId={selectedSubCategories.cat2}
          onSelect={(id) =>
            setSelectedSubCategories({ ...selectedSubCategories, cat3: id, cat4: null })
          }
        />
      )}
      {selectedSubCategories.cat3 && (
        <SubCategoriesList
          level={3}
          parentCategoryId={selectedSubCategories.cat3}
          onSelect={(id) =>
            setSelectedSubCategories({ ...selectedSubCategories, cat4: id })
          }
        />
      )}
      {selectedSubCategories.cat4 && (
        <SubCategoriesList level={4} parentCategoryId={selectedSubCategories.cat4} />
      )}
    </>
  );
}
