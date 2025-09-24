function App() {
  return (
    <main>
      <h1 className="app-title">Flight Booker</h1>
      <section className="app">
        <select>
          <option>Nur Hinflug</option>
          <option>Hin und Rückflug</option>
        </select>
        <input type="date" />
        <input disabled={true} type="date" />
        <button disabled={false} className="btn">Buchen</button>
      </section>
    </main>
  );
}

export default App;
