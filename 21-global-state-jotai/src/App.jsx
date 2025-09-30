import { AuthAction } from './components/auth-action';
import { AuthDisplay } from './components/auth-display';
import { CounterAction } from './components/counter-action';
import { CounterDisplay } from './components/counter-display';
import { Shell } from './components/shell';
import { Wrapper } from './components/wrapper';

function App() {
  return (
    <div>
      <h1>Global State</h1>
      <Shell>
        <Wrapper>
          <AuthAction />
          <CounterAction />
        </Wrapper>
        <Wrapper>
          <AuthDisplay />
          <CounterDisplay />
        </Wrapper>
      </Shell>
    </div>
  );
}

export default App;
