import { IAppContext } from '../app/context/AppContext';

export const lsIsDeliveryKey = 'isDelivery';

export function lsSaveIsDeliveryInfo(
  props?: { isDelivery: boolean; time?: number } | null
) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(
      lsIsDeliveryKey,
      JSON.stringify(
        props
          ? {
              ...props,
              isDelivery: props?.isDelivery ?? false,
              time: props?.time ?? new Date().getTime(),
            }
          : ''
      )
    );
  }
}

export function lsGetIsDeliveryInfo(): IAppContext['delivery'] {
  if (typeof window !== 'undefined') {
    const isDeliveryInfo = window.localStorage.getItem(lsIsDeliveryKey);
    if (isDeliveryInfo) return JSON.parse(isDeliveryInfo);
  }

  return null;
}

export function lsDeleteIsDeliveryInfo() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(lsIsDeliveryKey);
  }
}
