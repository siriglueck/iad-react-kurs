import { useState } from "react"

function convertToCelsius(fahrenheit) {
  return fahrenheit - 32 * (5 / 9);
}

function convertToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

export function TemperatureConverterExample1() {

    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    function handleCelsiusChange(celsius) {
      setCelsius(celsius);
      setFahrenheit(convertToFahrenheit(celsius));
    }

    function handleFahrenheitChange(fahrenheit) {
      setCelsius(convertToCelsius(fahrenheit));
      setFahrenheit(fahrenheit);
    }

    return <>
      <div className="box bordered">
      <input type="number" value={celsius} onChange={(ev)=>{handleCelsiusChange(ev.target.value)}} step="0.01" />
      <span>Celsius</span>
      <span>=</span>
      <input type="number" value={fahrenheit} onChange={(ev)=>{handleFahrenheitChange(ev.target.value)}} step="0.01" />
      <span>Fahrenheit</span>
    </div>
    </>
}
