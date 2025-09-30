import { TodosInputModern } from './todos-input';
import { TodosMain } from './todos-main';
import { TodosToolbar } from './todos-toolbar';
import { FilterProvider } from '../lib/filter-context';
import { useTodos } from '../store/todos';

export function TodosShell() {
  const todos = useTodos(state => state.todos);
  const create = useTodos(state => state.create);
  // Funktioniert ganz gut, weil dieses getAll synchron ist
  // const [todos, setTodos] = useState(() => getAll());

  return (
    <FilterProvider>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodosInputModern onCreate={create} />
        </header>

        {todos.length > 0 && (
          <>
            <TodosMain />
            <TodosToolbar />
          </>
        )}
      </section>
    </FilterProvider>
  );
}
