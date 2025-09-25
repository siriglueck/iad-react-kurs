import { Child1, Child2, Child3 } from './components';

function App() {
  console.log('Render App');
  return (
    <div>
      <h1>Component Tree</h1>
      <Child1 />
      <Child2 />
      <Child3 />
    </div>
  );
}

export default App;
