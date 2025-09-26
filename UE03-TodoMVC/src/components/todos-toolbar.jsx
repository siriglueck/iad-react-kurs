import { TodosFilter } from './todos-filter';

export function TodosToolbar({ todos, onDeleteComplete }) {
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
      {hasCompleted && <button className="clear-completed" onDeleteComplete={******}>Clear completed</button>}
    </footer>
  );
}
