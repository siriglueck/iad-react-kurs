import React, { useState } from 'react';

export function Child1() {
  console.log('Render Child1');
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Child 1 - Count:
        {count}
      </button>
      <SubChild1 parent="Child1" />
      <SubChild2 parent="Child1" />
    </div>
  );
}

export function Child2() {
  console.log('Render Child2');
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Child 2 - Count:
        {count}
      </button>
      <SubChild1 parent="Child2" />
      <SubChild2 parent="Child2" />

    </div>
  );
}

export function Child3() {
  console.log('Render Child3');
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Child 3 - Count:
        {count}
      </button>
      <SubChild1 parent="Child2" />
      <SubChild2 parent="Child2" />

    </div>
  );
}

export function SubChild1({ parent }) {
  console.log('Render SubChild1');
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {parent}
        {' '}
        - SubChild 1 - Count:
        {count}
      </button>
      <Demo />
    </>
  );
}

export function SubChild2({ parent }) {
  console.log('Render SubChild2');
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {parent}
        {' '}
        - SubChild 2 - Count:
        {count}
      </button>
      <Demo count={count} />
    </>
  );
}

export const Demo = React.memo(function Demo({ who = 'ich' }) {
  console.log('Render Demo');
  return (
    <div>
      Hurra,
      {who}
      {' '}
      funktioniere
    </div>
  );
});
