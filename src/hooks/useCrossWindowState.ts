import { useEffect, useRef, useState } from 'react';

type CrossWindowStateResponse<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export function useCrossWindowState<T>(
  storageKey: string,
  defaultValue: T,
): CrossWindowStateResponse<T> {
  const [state, setState] = useState<T>(defaultValue);
  const isNewSession = useRef(true);

  useEffect(() => {
    if (isNewSession.current) {
      const currentState = localStorage.getItem(storageKey);
      if (currentState) {
        setState(JSON.parse(currentState));
      } else {
        setState(defaultValue);
      }
      isNewSession.current = false;
      return;
    }
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      throw new Error(`Unable to save state to localStorage: ${error}`);
    }
  }, [state, storageKey, defaultValue]);

  useEffect(() => {
    function listener(event: StorageEvent): any {
      const { key, newValue } = event;
      if (key === storageKey) {
        setState(() => {
          return newValue ? JSON.parse(newValue) : null;
        });
      }
    }

    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, [storageKey, setState]);

  return [state, setState];
}
