import { TemperatureConverter } from "./components/temp-converter";
import { TemperatureConverterExample1 } from "./components/temp-converter-ex1";
import { TemperatureConverterExample2 } from "./components/temp-converter-ex2";
import { TemperatureConverterObj } from "./components/temp-converter-obj";

function App() {
  return (
    <main>
      <h1 className="app-title">Temperature Converter</h1>
      <section className="app">
        <TemperatureConverter />
        <TemperatureConverterObj />
        <TemperatureConverterExample1 />
        <TemperatureConverterExample2 />
      </section>
    </main>
  );
}

export default App;
