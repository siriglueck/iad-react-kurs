import { FlightBooker } from "./components/flight-booker";
import { FlightBookerExample } from "./components/flight-booker-ex";

function App() {
  return (
    <main>
      <h1 className="app-title">Flight Booker</h1>
      <section className="app">
        <FlightBooker />
        <FlightBookerExample />
      </section>
    </main>
  );
}

export default App;
