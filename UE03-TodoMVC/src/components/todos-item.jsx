import { useState } from 'react';

export function TodosItem({ todo, onToggle, onDelete }) {
  const [isEditing, setEditing] = useState(false);

  // then TodoS

  function deleteTodo() {
    console.log('Delete Todo', todo.tltle);
    // todo lebt in the shell
    onDelete(todo);
  }

  function toggleTodo() {
    console.log('Toggle Todo', todo.completed);
    todo.completed = !todo.completed;
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
              <input onChange={toggleTodo} className="toggle" type="checkbox" defaultChecked={todo.completed} />
              <label onDoubleClick={beginEdit}>{todo.title}</label>
              <button onClick={deleteTodo} className="destroy"></button>
            </div>
          )}
    </li>
  );
}
