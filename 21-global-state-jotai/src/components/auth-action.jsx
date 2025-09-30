import { useRef } from 'react';
import { useAuth } from '../utils/use-auth';

export function AuthAction() {
  console.log('Render AuthAction');
  const { isAuthenticated, login, logout } = useAuth();

  const ref = useRef(null);

  return isAuthenticated
    ? (
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      )
    : (
        <div>
          <input ref={ref} defaultValue="" />
          <button onClick={() => login(ref.current.value)}>Login</button>
        </div>
      );
}
