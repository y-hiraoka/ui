import { useCallback, useEffect, useRef, useState } from "react";

type JSONSerializable =
  | string
  | number
  | boolean
  | null
  | JSONSerializable[]
  | { [key: string]: JSONSerializable };

type UseLocalStorageParams<T extends JSONSerializable> = {
  storageKey: string;
  defaultState: T;
  isValidValue: (value: unknown) => value is T;
};

export function useLocalStorage<T extends JSONSerializable>({
  storageKey,
  defaultState: defaultStateProp,
  isValidValue: isValidValueProp,
}: UseLocalStorageParams<T>): [T, React.Dispatch<React.SetStateAction<T>>] {
  const isValidValue = useRef(isValidValueProp).current;
  const defaultState = useRef(defaultStateProp).current;
  const [state, setStateInner] = useState(defaultState);

  useEffect(() => {
    const getValueFromStorage = () => {
      const rawValue = window.localStorage.getItem(storageKey);
      if (rawValue === null) {
        return defaultState;
      }
      try {
        const parsedValue = JSON.parse(rawValue);
        if (isValidValue(parsedValue)) {
          return parsedValue;
        }
      } catch {
        // ignore
      }
      return defaultState;
    };

    setStateInner(getValueFromStorage());

    const listener = (event: StorageEvent) => {
      if (event.key === storageKey) {
        setStateInner(getValueFromStorage());
      }
    };

    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, [defaultState, isValidValue, storageKey]);

  const setState: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (newState) => {
      setStateInner((prevState) => {
        const nextState =
          typeof newState === "function" ? newState(prevState) : newState;
        window.localStorage.setItem(storageKey, JSON.stringify(nextState));
        return nextState;
      });
    },
    [storageKey],
  );

  return [state, setState];
}
