import { useRef } from "react";
import { useState } from "react"

function App() {

  const [beispiel, setBeispiel] = useState('');
  const inputRef = useRef();

  function greetControlled(){
    alert('Hallo '+ beispiel);
  }
  
  function greetUncontrolled(){
    const beispiel = inputRef.current.value;
    alert('Hallo '+ beispiel);
  }

  return (
    <div>
      <h1>Input-Elemente (oder allgemeiner Form-Elemente)</h1>
      
      <div>
        <h2>Controlled Input</h2>
        <input
          type="text"
          value={beispiel}
          onChange={(ev) => setBeispiel(ev.target.value)} />
          <br />
          Hallo {beispiel || 'Unbekannter'}
          <button onClick={greetControlled}>Greet</button>
      </div>

      <div>
        <h2>Uncontrolled Input</h2>
        <input ref={inputRef} type="text" defaultValue={'Dan'} />
          <br />
          <button onClick={greetUncontrolled}>Greet</button>
      </div>

    </div>
  )
}

export default App
