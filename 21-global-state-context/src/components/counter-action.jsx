import { useCounter } from '../utils/use-counter';

export function CounterAction() {
  console.log('Render CounterhAction');

  const { inc } = useCounter();
  return (
    <div>
      <button onClick={inc}>Inc</button>
    </div>
  );
}
