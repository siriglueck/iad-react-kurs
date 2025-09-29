import { useEffect, useState } from 'react';

export function FnComponent() {
  console.log('Render FnComponent');
  const [count, setCount] = useState(0);

  // Similar to componentDidMount
  useEffect(() => {
    console.log('After initial Render and Painting');
  }, []);

  // Similar to componentDidUpdate mit shouldComponentUpdate
  useEffect(() => {
    console.log('After Render and Painting. Only if count changed but initial too');
  }, [count]);

  // Similar to componentDidUpdate ohne shouldComponentUpdate
  // This allow us to do something after update - tbc?
  useEffect(() => {
    console.log('After every Render and Painting');
  });

  return (
    <div>
      <h2>I am a Function Component</h2>
      <button onClick={() => setCount(count + 1)}>
        Fn counter
        {` ${count}`}
      </button>
    </div>
  );
}
