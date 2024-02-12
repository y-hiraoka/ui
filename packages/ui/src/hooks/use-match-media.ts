import { useCallback, useMemo, useSyncExternalStore } from "react";

export function useMatchMedia(query: string, whenSSR = false): boolean {
  const mediaQueryList = useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    } else {
      return window.matchMedia(query);
    }
  }, [query]);

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      mediaQueryList?.addEventListener("change", onStoreChange);
      return () => mediaQueryList?.removeEventListener("change", onStoreChange);
    },
    [mediaQueryList],
  );

  return useSyncExternalStore(
    subscribe,
    () => mediaQueryList?.matches ?? whenSSR,
    () => whenSSR,
  );
}
