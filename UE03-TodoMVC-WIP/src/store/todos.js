import { create } from 'zustand';
import { todos } from '../mock-data';

export const useTodos = create(set => ({
  todos: todos,
  create: title => set(state => ({ todos: [...state.todos, {
    id: (todos.at(-1)?.id || 0) + 1, title, completed: false,
  }] })),

  // Business logic are here so we need to clean the App tree code
  // a function get todo and call set
  toggle: todo => set(state => ({
    todos: state.todos.map(t => t.id !== todo.id ? t : { ...t, completed: !t.completed }),
  })),

  remove: todo => set(state => ({
    todos: state.todos.filter(t => t.id !== todo.id),
  })),
  removeCompleted: () => set(state => ({
    todos: state.todos.filter(t => !t.completed),
  })),

}));
