import { useState } from 'react';
import { getAll } from '../api/todos';
import { TodosInputModern } from './todos-input';
import { TodosMain } from './todos-main';
import { TodosToolbar } from './todos-toolbar';
import { FilterProvider } from '../lib/filter-context';

export function TodosShell() {
  // Funktioniert ganz gut, weil dieses getAll synchron ist
  const [todos, setTodos] = useState(() => getAll());

  function createTodo(title) {
    const todo = { id: (todos.at(-1)?.id || 0) + 1, title, completed: false };
    setTodos([...todos, todo]);
  }

  function toggleTodo(todo) {
    setTodos(todos.map(t => t.id !== todo.id ? t : { ...t, completed: !t.completed }));
  }

  function deleteTodo(todo) {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  function deleteCompletedTodos() {
    setTodos(todos.filter(t => !t.completed));
  }

  return (
    <FilterProvider>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodosInputModern onCreate={createTodo} />
        </header>

        {todos.length > 0 && (
          <>
            <TodosMain todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
            <TodosToolbar todos={todos} onDeleteCompleted={deleteCompletedTodos} />
          </>
        )}
      </section>
    </FilterProvider>
  );
}
