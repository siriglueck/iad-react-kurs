import { useCallback } from 'react';
import { atom, useAtomValue } from 'jotai';
import { useAtom } from 'jotai';

// the Atom we wrote is in the module
const userAtom = atom(null);
// derived state
const isAuthenticatedAtom = atom(get => get(userAtom) != null);

export function useAuth() {
  const [user, setUser] = useAtom(userAtom);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  // login function
  const login = useCallback(name => setUser({ name }), [setUser]);

  // logout function
  const logout = useCallback(() => setUser(null), [setUser]);

  return { user, isAuthenticated, login, logout };
}
