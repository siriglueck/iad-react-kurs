function App() {

  function handleClick(ev) {
    console.log(ev.clientX);
  }

  function handleKey(ev) {
    if (ev.key <= '0' || ev.key >= '9')
      ev.preventDefault();
  }

  /**
   * Typischer Event-Handler
   * Best Practice: Typisiere ev (TypeScript oder JSDoc)
   */

  function handlerName(ev) {
    // Kein Return reinschreiben!
    // aber der Browser krieg immer 1 Hanler Objekt 
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1>Events</h1>
      <button onClick={handleClick}>Button 1</button>
      <button onClick={function () { console.log('Button 2 clicked'); }}>Button 2 (eher selten)</button>
      <button onClick={() => { console.log('Button 3 clicked'); }}>Button 3</button>
      <input onKeyUp={handleKey} />
      <a onClick={ev => ev.preventDefault()} href="https://react.dev">React</a>
      <form onSubmit={ ev => ev.preventDefault() }>
        <input type="text" name="vorname" />
      </form>
    </div>
  )
}

export default App
