import { Counter } from "./components/counter"



function App() {


  return (
    <>
      <h1>Interaktion</h1>
      <Counter start={0} />
      <Counter start={100} />
      <Counter />
    </>
  )
}

export default App
