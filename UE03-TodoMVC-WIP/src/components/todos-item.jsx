import { useState } from 'react';
import { useTodos } from '../store/todos';

export function TodosItem({ todo }) {
  const [isEditing, setEditing] = useState(false);
  const toggle = useTodos(state => state.toggle);
  const remove = useTodos(state => state.remove);

  function deleteTodo() {
    console.log('Delete Todo', todo.title);
    remove(todo);
    // onDelete(todo);
  }

  function toggleTodo() {
    console.log('Toggle Todo', todo.title);
    toggle(todo);
    // onToggle(todo);
  }

  function beginEdit() {
    setEditing(true);
  }

  return (
    <li className={isEditing ? 'editing' : todo.completed ? 'completed' : ''}>
      { isEditing
        ? <input className="edit" defaultValue="Create a TodoMVC template" />
        : (
            <div className="view">
              <input onChange={toggleTodo} className="toggle" type="checkbox" checked={todo.completed} />
              <label onDoubleClick={beginEdit}>{todo.title}</label>
              <button onClick={deleteTodo} className="destroy"></button>
            </div>
          )}
    </li>
  );
}
