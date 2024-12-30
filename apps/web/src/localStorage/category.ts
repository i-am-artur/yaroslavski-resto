import { IAppContext } from '../app/context/AppContext';

export const lsKey = 'category';

export function lsSaveCategoryInfo(props: { category: number | null }) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(lsKey, JSON.stringify({ category: props.category }));
  }
}

export function lsGetCategoryInfo() {
  if (typeof window !== 'undefined') {
    const categoryInfo = window.localStorage.getItem(lsKey);
    if (categoryInfo) return JSON.parse(categoryInfo);
  }

  return null;
}

export function lsDeleteCategoryInfo() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(lsKey);
  }
}
