import { useRef, useState } from "react";

export function TemperatureConverterObj() {

  // Hooks
  const [temperatures, setTemperatures] = useState({
    celsius: 0,
    fahrenheit: 0,
  });
  const celsRef = useRef(null);
  const fahrRef = useRef(null);


  function calcCelsius() {
    const inputCel = celsRef.current.value;
    const ergInFahr = inputCel * (9 / 5) + 32;
    //const ergFahr = inputFahr - 32 * (5 / 9);
    setTemperatures({
      celsius: parseFloat(inputCel).toFixed(2),
      fahrenheit: parseFloat(ergInFahr).toFixed(2)
    });
  }

    function calcFahrenheit() {
    const inputFahr = fahrRef.current.value;
    const ergInCel = inputFahr - 32 * (5 / 9);
    setTemperatures({
      celsius: parseFloat(ergInCel).toFixed(2),
      fahrenheit: parseFloat(inputFahr).toFixed(2)
    });
  }

  return <>
    <div className="box bordered">
      <input type="number" ref={celsRef} value={temperatures.celsius} step="0.01" onChange={calcCelsius} />
      <span>Celsius</span>
      <span>=</span>
      <input type="number" ref={fahrRef} value={temperatures.fahrenheit} step="0.01" onChange={calcFahrenheit} />
      <span>Fahrenheit</span>
    </div>
  </>
}
