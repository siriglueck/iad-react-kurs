import { useCounter } from '../utils/use-counter';

export function CounterDisplay() {
  console.log('Render CounterDisplay');

  const { count } = useCounter();

  return (
    <div>
      Stand:
      {' '}
      {count}
    </div>
  );
}
