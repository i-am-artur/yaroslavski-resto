'use client';
import { useContext, useState } from 'react';
import { qrContext } from '../../../../(components)/QrContext';
import { CategorySelectT } from '../../../../../../../src/instances/languages/translation/instances/languages/components/selectCategory/ua';
import { css } from '../../../../../../../styled-system/css';
import CategoriesList from './CategoriesList';
import MainCategorySelect from '../MainCategorySelect';
import { SelectedCategories } from '../types';

export default function CategoriesSelectSmall(props: {
  selectedCategories: SelectedCategories;
  onChange?: (selectedCategories: SelectedCategories) => void;
  t: CategorySelectT;
}) {
  const ctx = useContext(qrContext);
  const [showMainCategorySelect, setShowMainCategorySelect] = useState(false);

  return (
    <div
      className={css({
        display: { base: 'block', sm: 'none' },
        position: 'sticky',
        top: -1,
      })}
    >
      <div
        className={css({
          paddingTop: 'side.v',
          paddingBottom: 'side.v',
          rowGap: 'item.v',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
        })}
      >
        <select
          aria-label='Main category selection'
          className={css({ width: '100%' })}
          onClick={(e) => {
            e.preventDefault();
            e.currentTarget.blur();
            setShowMainCategorySelect(true);
          }}
          value={props.selectedCategories.cat1}
          onChange={() => null}
        >
          {!ctx.categories.loading &&
            ctx.categories.value
              .filter((elToFilter) => elToFilter.parentId === null)
              .map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name[ctx.lang]}
                </option>
              ))}
        </select>

        <nav
          className={css({
            rowGap: 'unit.v',
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <CategoriesList
            list={ctx.categories.value.filter(
              (el) => el.parentId === props.selectedCategories.cat1
            )}
            selectedCategory={props.selectedCategories?.cat2}
            onSelect={(category) => {
              props?.onChange?.({
                ...props.selectedCategories,
                cat2: category,
                cat3: null,
                cat4: null,
              });
            }}
          />
          <CategoriesList
            list={ctx.categories.value.filter(
              (el) => el.parentId === props.selectedCategories?.cat2?.id
            )}
            selectedCategory={props.selectedCategories?.cat3}
            onSelect={(category) => {
              props?.onChange?.({
                ...props.selectedCategories,
                cat3: category,
                cat4: null,
              });
            }}
          />
          <CategoriesList
            list={ctx.categories.value.filter(
              (el) => el.parentId === props.selectedCategories?.cat3?.id
            )}
            selectedCategory={props.selectedCategories?.cat4}
            onSelect={(category) => {
              props?.onChange?.({
                ...props.selectedCategories,
                cat4: category,
              });
            }}
          />
        </nav>
      </div>
      <MainCategorySelect
        open={showMainCategorySelect}
        onClose={() => setShowMainCategorySelect(false)}
        cat1={props.selectedCategories.cat1}
        t={props.t}
      />
    </div>
  );
}
