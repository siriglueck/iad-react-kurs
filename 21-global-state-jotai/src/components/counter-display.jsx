import { useAtomValue } from 'jotai';
import { counterAtom } from '../store/counter';

export function CounterDisplay() {
  console.log('Render CounterDisplay');

  const count = useAtomValue(counterAtom);

  return (
    <div>
      Stand:
      {' '}
      {count}
    </div>
  );
}
