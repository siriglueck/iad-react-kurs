import { create } from 'zustand';

export const useAuth = create(set => ({
  user: null,
  login: name => set({ user: { name } }),
  logout: () => set({ user: null }),
}));
