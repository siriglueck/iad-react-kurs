import { useCallback, useContext } from 'react';
import { CounterContext } from './contexts';

export function useCounter() {
  const { count, setCount } = useContext(CounterContext);

  const inc = useCallback(() => setCount(count => count + 1), [setCount]);

  return { count, inc };
}
