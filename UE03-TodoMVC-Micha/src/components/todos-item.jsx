import { useState } from 'react';

export function TodosItem({ todo, onToggle, onDelete }) {
  const [isEditing, setEditing] = useState(false);

  function deleteTodo() {
    console.log('Delete Todo', todo.title);
    onDelete(todo);
  }

  function toggleTodo() {
    console.log('Toggle Todo', todo.title);
    onToggle(todo);
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
