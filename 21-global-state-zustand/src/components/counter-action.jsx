import { useCounter } from '../store/counter';

export function CounterAction() {
  console.log('Render CounterhAction');

  const inc = useCounter(state => state.inc);
  return (
    <div>
      <button onClick={inc}>Inc</button>
    </div>
  );
}
