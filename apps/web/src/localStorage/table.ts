import { IAppContext } from '../app/context/AppContext';

export const lsTableKey = 'table';

export function lsSaveTableInfo(props: { id: number | null; time?: number } | null) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(
      lsTableKey,
      JSON.stringify(props ? { ...props, time: props?.time ?? new Date().getTime() } : '')
    );
  }
}

export function lsGetTableInfo(): IAppContext['table'] {
  if (typeof window !== 'undefined') {
    const tableInfo = window.localStorage.getItem(lsTableKey);
    if (tableInfo) return JSON.parse(tableInfo);
  }

  return null;
}

export function lsDeleteTableInfo() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(lsTableKey);
  }
}
