import { useEffect, useState } from 'react';

export function Timer() {
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (duration > 0) {
      const interval = setInterval(() => {
        setTime((prev) => {
          if (prev + 1 >= duration) {
            clearInterval(interval); // หยุดเมื่อครบ
            return duration;
          }
          return prev + 1;
        });
      }, 100); // 100ms

      return () => clearInterval(interval);
    }
  }, [duration]);

  function handleDuration(e) {
    setDuration(e);
  }

  return (
    <>
      <div className="box bordered">

        <div>
          Elapsed Time:
          <progress value={time} max={duration}>0%</progress>
        </div>

        <div className="box bordered">
          <output id="durationOutput">
            {time / 10}
            s
          </output>
        </div>

        <div className="duration">
          <label htmlFor="durationInput">Duration:</label>
          <input
            id="durationInput"
            max="1000"
            min="0"
            step="1"
            type="range"
            defaultValue="0"
            onChange={e => handleDuration(Number(e.target.value))}
          />
        </div>
        <button type="button" onClick={() => setTime(0)}>RESET</button>

      </div>
    </>
  );
}
