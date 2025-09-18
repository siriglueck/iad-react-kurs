import TodoShell from "./components/todo-shell"

function App() {

  return (
    <>
      <TodoShell />
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="https://github.com/siriglueck">Siri</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  )
}

export default App
