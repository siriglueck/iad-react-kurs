import { useState } from "react"

export function Timer() {

  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);

  function getTime(ev) {
    const seconds = parseInt(ev.target.value);
    setTime(seconds);


    // Park here -> Countdown
    //setInterval(function () {
    //  }, 1000);
  }

    return <>
      <div className="box bordered">

        <div>
          Elapsed Time:
          <progress value={time} max="100">0%</progress>
        </div>

        <div className="box bordered">
          <output id="durationOutput">{time}s</output>
        </div>

        <div className="duration">
          <label htmlFor="durationInput">Duration:</label>
          <input id="durationInput" max="100" min="0" step="1" type="range" defaultValue="0"
            onChange={getTime} />
        </div>
        <button type="button" onClick={() => setTime(0)}>RESET</button>



      </div>
    </>
  }
