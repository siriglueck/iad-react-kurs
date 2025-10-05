import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { usersApi } from '../api/users';

export const useUserStore = create(
  persist(
    (set, get) => ({
      currentUserId: null,
      currentUser: null,
      loading: false,
      initialized: false,

      selectUser: async (userId) => {
        set({ currentUserId: userId, loading: true });

        try {
          const user = await usersApi.getById(userId);
          set({ currentUser: user, loading: false });
        }
        catch {
          set({ currentUser: null, loading: false });
        }
      },

      clearUser: () => {
        set({ currentUserId: null, currentUser: null });
      },

      refreshCurrentUser: async () => {
        const { currentUserId, selectUser } = get();
        if (currentUserId) {
          await selectUser(currentUserId);
        }
      },

      initialize: async () => {
        const { currentUserId, initialized } = get();
        if (!initialized && currentUserId) {
          set({ loading: true });
          try {
            const user = await usersApi.getById(currentUserId);
            set({ currentUser: user, loading: false, initialized: true });
          }
          catch {
            set({ currentUser: null, loading: false, initialized: true });
          }
        }
        else {
          set({ initialized: true });
        }
      },
    }),
    {
      name: 'current-user-storage',
      partialize: state => ({ currentUserId: state.currentUserId }),
    },
  ),
);
