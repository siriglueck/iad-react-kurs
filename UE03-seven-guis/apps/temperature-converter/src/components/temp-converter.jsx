import { useState } from "react"

export function TemperatureConverter() {

  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  let result = 0;

  function calcCelsius(ev) {
    setCelsius(ev.target.value)
    result = ev.target.value * (9 / 5) + 32;
    setFahrenheit(parseFloat(result).toFixed(2));
  }

  function calcFahrenheit(ev) {
    setFahrenheit(ev.target.value)
    result = ev.target.value - 32 * (5 / 9);
    setCelsius(parseFloat(result).toFixed(2));
  }

  return <>
    <div className="box bordered">
      <input type="number" value={celsius} step="0.01" onChange={calcCelsius} />
      <span>Celsius</span>
      <span>=</span>
      <input type="number" value={fahrenheit} step="0.01" onChange={calcFahrenheit} />
      <span>Fahrenheit</span>
    </div>
  </>
}
