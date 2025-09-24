function App() {
  return (
    <main>
      <h1 className="app-title">Counter</h1>
      <section className="app">
        <div className="box bordered">
          <input type="number" readOnly />
          <button className="btn">Count</button>
        </div>
      </section>
    </main>
  );
}

export default App;
