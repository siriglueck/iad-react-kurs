import { useState } from 'react';
import { AuthContext, CounterContext } from '../utils/contexts';

export function Shell({ children }) {
  console.log('Render Shell');

  const [count, setCount] = useState(0);
  const [auth, setAuth] = useState({ user: null });

  return (
    <CounterContext value={{ count, setCount }}>
      <AuthContext value={{ auth, setAuth }}>
        {children}
      </AuthContext>
    </CounterContext>
  );
}
