// import { useCallback, useContext } from 'react';
// import { AuthContext } from './contexts';
import { proxy, useSnapshot } from 'valtio';

const state = proxy({ user: null });

export const login = name => state.user = { name };
export const logout = () => state.user = null;

export function useAuth() {
  // const { auth, setAuth } = useContext(AuthContext);
  const { user } = useSnapshot(state);

  // login function
  // const login = useCallback(name => setAuth({ user: { name } }), [setAuth]);
  // logout function
  // const logout = useCallback(() => setAuth({ user: null }), [setAuth]);

  // return { user: auth.user, isAuthenticated: auth.user !== null, login, logout };
  return { user, isAuthenticated: user !== null };
}
