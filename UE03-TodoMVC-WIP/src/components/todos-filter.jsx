import { useFilter } from '../lib/use-filter';

export function TodosFilter() {
  const currentFilter = useFilter();

  return (
    <ul className="filters">
      <li>
        <a className={currentFilter === 'all' ? 'selected' : ''} href="#/">All</a>
      </li>
      <li>
        <a className={currentFilter === 'active' ? 'selected' : ''} href="#/active">Active</a>
      </li>
      <li>
        <a className={currentFilter === 'completed' ? 'selected' : ''} href="#/completed">Completed</a>
      </li>
    </ul>
  );
}
