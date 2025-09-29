import { createContext, use, useState } from 'react';

// the context here is not exported
const CounterCtx = createContext(null);

export function CounterProvider({ children, start }) {
  const [count, setCount] = useState(start);

  function inc() {
    setCount(c => c + 1);
  }

  function dec() {
    setCount(c => c - 1);
  }

  return (
    <div>
      <CounterCtx value={{ count, inc, dec }}>
        {children}
      </CounterCtx>
    </div>
  );
}

// the hook here use the context and export
export function useCounter() {
  return use(CounterCtx);
}
