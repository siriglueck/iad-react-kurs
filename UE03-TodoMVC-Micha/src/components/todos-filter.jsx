import { hashToFilter } from '../lib/hash-to-filter';

export function TodosFilter() {
  const currentFilter = hashToFilter();

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
