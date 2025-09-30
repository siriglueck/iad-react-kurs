import { useCallback, useContext } from 'react';
import { AuthContext } from './contexts';

export function useAuth() {
  const { auth, setAuth } = useContext(AuthContext);

  // login function
  const login = useCallback(name => setAuth({ user: { name } }), [setAuth]);
  // logout function
  const logout = useCallback(() => setAuth({ user: null }), [setAuth]);

  return { user: auth.user, isAuthenticated: auth.user !== null, login, logout };
}
