import { create } from 'zustand';

// a global state
export const useCounter = create(set => ({

  count: 0,
  // a template, then it returns an object
  // this one state is the prev
  inc: () => set(state => ({ count: state.count + 1 })),

}));
