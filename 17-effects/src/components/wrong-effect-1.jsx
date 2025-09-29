import { useState } from 'react';

export function WrongEffect1() {
  console.log('Render WrongEffect1');
  const [count, setCount] = useState(0);
  // const [double, setDouble] = useState(0);
  const double = count * 2; // Derived state

  // # DO NOT USE an effect to watch a state and change another state #
  // // Similar to componentDidUpdate mit shouldComponentUpdate
  // useEffect(() => {
  //   setDouble(count * 2);
  // }, [count]);

  // nur ein mal rendern
  function inc() {
    setCount(count + 1);
    setCount((count + 1) * 2);
  }

  return (
    <div>
      <h2>I am a Function Component</h2>
      <button onClick={inc}>
        {` Fn Counter ${count}`}
      </button>
      {` Double Value ${double}`}
    </div>
  );
}
