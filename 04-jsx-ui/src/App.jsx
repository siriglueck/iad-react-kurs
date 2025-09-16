import { Profile } from "./components/profile"
import TodoList from "./components/todo-list"

function App() {

  return (
    <div>
      <h1>JSX</h1>
      <TodoList />
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
        
    </section>
    </div>
  )
}

export default App
