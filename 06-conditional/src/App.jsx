import EarlyExit from "./components/early-exit"
import JsxInVars from "./components/jsx-in-vars"
import Operatoren from "./components/operatoren"
import SimpleIfElse from "./components/simple-if-else"

function App() {
 
  return (
    <div>
      <h1>Conditional JSX</h1>
      < SimpleIfElse />
      < EarlyExit noten = {[10,20,20,5]} />
      < EarlyExit noten = {[]} />
      <Operatoren count={1} itemName="book" />
      <Operatoren count={0} itemName="book" />
      <Operatoren count={5} itemName="book" />
      <Operatoren count={5} itemName=" " />
      <JsxInVars />
    </div>
  )
}

export default App
