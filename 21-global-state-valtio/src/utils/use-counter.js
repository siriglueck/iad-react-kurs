// import { useCallback, useContext } from 'react';
// import { CounterContext } from './contexts';
import { proxy, useSnapshot } from 'valtio';

const state = proxy({ count: 0 });

export function inc() {
  state.count++;
}

export function useCounter() {
  // const { count, setCount } = useContext(CounterContext);
  // use
  const { count } = useSnapshot(state);

  // const inc = useCallback(() => setCount(count => count + 1), [setCount]);

  return { count };
}
