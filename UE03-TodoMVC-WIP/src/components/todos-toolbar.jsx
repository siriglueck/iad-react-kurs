import { useTodos } from '../store/todos';
import { TodosFilter } from './todos-filter';

export function TodosToolbar() {
  const todos = useTodos(state => state.todos);
  const removeCompleted = useTodos(state => state.removeCompleted);

  const activeCount = todos.filter(t => !t.completed).length;
  const hasCompleted = todos.some(t => t.completed);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
        {' '}
        item
        {activeCount !== 1 && 's'}
        {' '}
        left
      </span>
      <TodosFilter />
      {/* <!-- Hidden if no completed items are left ↓ --> */}
      {hasCompleted && <button onClick={removeCompleted} className="clear-completed">Clear completed</button>}
    </footer>
  );
}
