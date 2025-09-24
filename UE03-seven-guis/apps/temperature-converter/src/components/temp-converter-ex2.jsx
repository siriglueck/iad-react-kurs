import { useState } from "react"
import { TemperatureConverterExample2Display } from "./temp-converter-ex2-display";

function convertToCelsius(fahrenheit) {
  return parseFloat(fahrenheit - 32 * (5 / 9)).toFixed(2);
}

function convertToFahrenheit(celsius) {
  return parseFloat(celsius * (9 / 5) + 32).toFixed(2);
}

export function TemperatureConverterExample2() {

    // const [celsius, setCelsius] = useState(2);
    // const [fahrenheit, setFahrenheit] = useState(2);

    const [temperatures, setTemperatures] = useState({
      celsius: 0,
      fahrenheit: 0
    });

    function handleCelsiusChange(celsius) {
      //setCelsius(celsius);
      //setFahrenheit(convertToFahrenheit(celsius));
      setTemperatures({celsius, fahrenheit: convertToFahrenheit(celsius)});
    }

    function handleFahrenheitChange(fahrenheit) {
      //setCelsius(convertToCelsius(fahrenheit));
      //setFahrenheit(fahrenheit);
      setTemperatures({celsius: convertToCelsius(fahrenheit), fahrenheit});
    }

    return <>
      <div className="box bordered">
      <TemperatureConverterExample2Display value={temperatures.celsius} unit={'celsuis'} onChange={handleCelsiusChange} />
      <span>=</span>
      <TemperatureConverterExample2Display value={temperatures.fahrenheit} unit={'Fahrenheit'} onChange={handleFahrenheitChange} />
    </div>
    </>
}
