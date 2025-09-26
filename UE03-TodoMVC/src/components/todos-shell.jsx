import { useState } from 'react';
import { getAll } from '../api/todos';
import { TodosInput } from './todos-input';
import { TodosMain } from './todos-main';
import { TodosToolbar } from './todos-toolbar';

// next week, we will learn to make it as a global component
// const todos = getAll();

function hashToFilter() {
  return location.hash.slice(2) || 'all';
  // so this cut '#/' out and when there is empty, then we get empty string anyway
}

export function TodosShell() {
  const [, setFilter] = useState(() => hashToFilter());

  // Funktionier ganz gut, weil dieses getAll synschon ist
  const [todos, setTodos] = useState(getAll());

  function createTodo(title) {
    const todo = { id: (todos.at(-1)?.id || 0) + 1, title, completed: false };
    setTodos([...todos, todo]);
  }

  function toggleTodo(todo) {
    setTodos(todos.map(t => t.id !== todo.id ? t : { ...t, completed: !t.completed }));
  }

  function deleteTodo(todo) {
    console.log('Deleting', todo.title);
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  function deleteCompletedTodos() {
    setTodos(todos.filter(t => !t.completed));
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodosInput onCreate={createTodo} />
      </header>

      {todos.length > 0 && (
        <>
          <TodosMain todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
          <TodosToolbar todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onDeleteComplete={deleteCompletedTodos} />
        </>
      )}
    </section>
  );
}
