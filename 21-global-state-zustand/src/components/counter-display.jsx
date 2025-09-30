import { useCounter } from '../store/counter';

export function CounterDisplay() {
  console.log('Render CounterDisplay');

  const count = useCounter(state => state.count);

  return (
    <div>
      Stand:
      {' '}
      {count}
    </div>
  );
}
