import { useState } from 'react';
import { Container } from './components/container';
import { ThemeContext } from './utils/theme-context';
import { ForeColorContext } from './utils/color-context';
import { CounterProvider } from './components/counter-context';

function App() {
  const [color, setColor] = useState('#0000FF');

  return (
    <CounterProvider start={10}>
      <ThemeContext.Provider value={{ color, setColor }}>
        {/* // React 19: kein .Provider mehr nötig */}
        <ForeColorContext value="green">
          {/* Warum: Das war in Funktionskomponenten die einzige Variante den Context zu lesen
        bevor es Hooks gab. Da mit dem useContext-Hook das quasi obselet ist,
        hat man in React 19 gesagt: Context ist direkt der Provider */}
          <ForeColorContext.Consumer>
            {ctx => <span>{ctx}</span>}
          </ForeColorContext.Consumer>
          <div>
            <h1>Context</h1>
            <input
              type="color"
              value={color}
              onChange={e => setColor(e.target.value)}
            />
            <Container />
          </div>
        </ForeColorContext>
      </ThemeContext.Provider>
    </CounterProvider>
  );
}

export default App;
