import { useCrossWindowState } from '../hooks/useCrossWindowState';
import { createContext, useContext } from 'react';

export type State = {
  value: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
};

const DEFAULT_VALUES: State = {
  value: [],
  setValue: () => [],
};

export const CrossWindowStateContext = createContext(DEFAULT_VALUES);

export function CrossWindowStateProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useCrossWindowState<string[]>('context-page', []);

  return (
    <CrossWindowStateContext.Provider value={{ value, setValue }}>
      {children}
    </CrossWindowStateContext.Provider>
  );
}

export const useCrossWindowStateContext = () => useContext(CrossWindowStateContext);
