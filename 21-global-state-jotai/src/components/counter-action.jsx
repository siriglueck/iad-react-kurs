import { useSetAtom } from 'jotai';
import { counterAtom } from '../store/counter';

export function CounterAction() {
  console.log('Render CounterhAction');

  const setCount = useSetAtom(counterAtom);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Inc</button>
    </div>
  );
}
