import { useState } from 'react';
import { FnComponent } from './components/fn-component';
import { ClassComponent } from './components/class-component';
import { WrongEffect1 } from './components/wrong-effect-1';
import { WrongEffect2 } from './components/wrong-effect-2';

function App() {
  console.log('Rendering App');
  const [count, setCount] = useState(0);
  const [classVisible, setClassVisible] = useState(true);

  return (
    <div>
      <WrongEffect1 />
      <WrongEffect2 />
      <button onClick={() => setCount(count + 1)}>
        App counter
        {` ${count}`}
      </button>
      <FnComponent />
      <button onClick={() => setClassVisible(!classVisible)}> Toggle </button>
      { classVisible && <ClassComponent />}
    </div>
  );
}

export default App;
