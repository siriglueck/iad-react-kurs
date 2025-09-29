import { useState } from 'react';
import { Weather } from './components/weather';
import { Clock } from './components/clock';
import { FollowMouse } from './components/follow-mouse';
import { useOnline } from './hooks/use-online';

function App() {
  const [delay, setDelay] = useState(5);

  const isOnline = useOnline;

  const [isWeatherVisible, setWeatherVisible] = useState(false);
  const [isClockVisible, setClockVisible] = useState(false);
  const [isPointVisible, setPointVisible] = useState(false);

  return (
    <div>
      <div>useEffect Use Cases</div>
      <h2>
        Ich bin
        {isOnline ? ' online' : ' offline'}
      </h2>

      <button onClick={() => setWeatherVisible(v => !v)}> Toggle Weather</button>
      {isWeatherVisible && <Weather />}

      <br />

      <button onClick={() => setClockVisible(v => !v)}> Toggle Clock</button>
      <input
        type="range"
        min={1}
        max={10}
        value={delay}
        onChange={e => setDelay(e.target.value)}
      />
      {isClockVisible && <Clock delay={delay} />}

      <br />
      <button onClick={() => setPointVisible(v => !v)}> Toggle Follow-Mouse</button>
      {isPointVisible && <FollowMouse />}
    </div>
  );
}

export default App;
