import TodosInput from "./components/todos-input"
import TodosList from "./components/todos-list"
import TodosStats from "./components/todos-stats"

function App() {
  return (
    <div>
    <h1>todos</h1>
    <main>
      <TodosInput />
      <TodosList />
      <TodosStats />
    </main>
  </div>

  )
}

export default App
