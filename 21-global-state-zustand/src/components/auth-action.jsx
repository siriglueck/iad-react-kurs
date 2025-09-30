import { useRef } from 'react';
import { useAuth } from '../store/auth';

export function AuthAction() {
  console.log('Render AuthAction');

  const isAuthenticated = useAuth(state => state.user != null);
  const login = useAuth(state => state.login);
  const logout = useAuth(state => state.logout);

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
