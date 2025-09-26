import { TodosItem } from './todos-item';

export function TodosList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {/* <!-- These are here just to show the structure of the list items --> */}
      {/* <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
      {todos.map(t => <TodosItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />)}
    </ul>
  );
}
