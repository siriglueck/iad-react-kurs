import { useState } from 'react';
import { AlertButton } from './alert-button';
import { CustomButton, PressableButton, PropsSpreadButton } from './custom-button';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [isVisible, setVisible] = useState(false);

  // Event Handler, normalerweise lokale Funktion in der Komponenten
  // Event Handler returniert nichts
  // Name beginnt oft mit handleUndDannName
  function handleClick() {
    setClickCount(clickCount + 1);
    alert('Du hast geklickt! ' + clickCount);
  }
  function handleSaveClick() {
    setVisible(true);
    alert('Du hast gespeichert!');
  }

  return (
    <div>
      <h1>Responding to Events</h1>
      <a
        onClick={ev => ev.preventDefault()}
        href="https://react.dev/learn/responding-to-events"
        target="_blank"
      >
        Link to Doc
      </a>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'Column', gap: '1rem' }}>
        <p>
          Clicks::
          {clickCount}
          {isVisible && <span>Clicken macht Spaß, oder?</span>}
        </p>
        <button>Ich tue nicht</button>
        <button onClick={handleClick}>Click mich</button>
        <button onClick={handleClick}>Mich auch</button>
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={() => { alert('Inline Handler'); }}> Inline Handler</button>
        <AlertButton message="Welche"> Mache Übung </AlertButton>
        <AlertButton message="Wie lange"> Mache Pause </AlertButton>
        <CustomButton onClick={() => prompt('Wir gehts?')}>Stelle Frage</CustomButton>
        <CustomButton onClick={() => alert('Handler/Funktionen als Prop')}>Handler als Props</CustomButton>
        <PropsSpreadButton onClick={() => alert('Handler/Funktionen als Prop')}> Props spread </PropsSpreadButton>
        <div
          onClickCapture={() => alert('capture div clicked')}
          onClick={() => alert('buble div clicked')}
        >
          <PressableButton onPress={() => alert('Button1')}>Button 1</PressableButton>
          Div Content
          <PressableButton onPress={() => alert('Button2')}>Button 2</PressableButton>
        </div>

      </div>

    </div>
  );
}

export default App;
