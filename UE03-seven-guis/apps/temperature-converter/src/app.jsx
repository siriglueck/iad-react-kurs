import { TemperatureConverter } from "./components/temp-converter";
import { TemperatureConverterObj } from "./components/temp-converter-obj";

function App() {
  return (
    <main>
      <h1 className="app-title">Temperature Converter</h1>
      <section className="app">
        <TemperatureConverter />
        <TemperatureConverterObj />
      </section>
    </main>
  );
}

export default App;
