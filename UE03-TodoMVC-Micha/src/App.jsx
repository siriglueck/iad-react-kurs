import { TodosShell } from './components/todos-shell';

function App() {
  return (
    <>
      <TodosShell />
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by
          {' '}
          <a href="https://www.iad.de">Micha</a>
        </p>
        <p>
          Part of
          {' '}
          <a href="https://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
