import { useEffect, useRef, useState } from 'react';

export function WrongEffect2() {
  console.log('RENDERING');
  const ref = useRef(null);
  const [accData, setAccData] = useState({ create_at: 'Warten ... ' });
  const [selected, setSelected] = useState('vuejs');

  // MUSTER IST ERSTMAL IN ORDNUNG
  // Dieses Muster (also fetch after initial render) darf u.U. noch
  // benutzt werden. Im Prinzip ist das asynchrone Starten des Requests
  // und das Warten auf die Antwort, die der Browser mir mit dem Promise-Outcome
  // dann später mitteilt, das EXTERNAL SYSTEM.
  useEffect(() => {
    fetch('https://api.github.com/users/vuejs')
      .then(resp => resp.json())
      .then(data => setAccData(data));
  }, []);

  // In der Kombination mit dem oberen zusammen ist einer der Effects schon überflüssig
  // zum Beispiel kann der obere jetzt gelösct werden, falls der hier folgende präsent ist
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${selected}`)
  //     .then(resp => resp.json())
  //     .then(data => setAccData(data));
  // }, [selected]);
  // This is okay with controlled

  // Der Effect mit der selected-Dependency kann aber auch wegfallen, wenn wir den fetch gleich mit dem change-Event verknüpfen
  function handleChange(e) {
    setSelected(e.target.value);
    fetch(`https://api.github.com/users/${e.target.value}`)
      .then(resp => resp.json())
      .then(data => setAccData(data));
  }

  function handleUncontrolledChange() {
    fetch(`https://api.github.com/users/${ref.current.value}`)
      .then(resp => resp.json())
      .then(data => setAccData(data));
  }

  return (
    <>
      <select value={selected} onChange={handleChange}>
        <option value="facebook">React</option>
        <option value="angular">Angular</option>
        <option value="Vue">Vue</option>
      </select>
      <select ref={ref} defaultValue="" onChange={handleUncontrolledChange}>
        <option value="">Bitte etwas auswählen</option>
        <option value="facebook">React</option>
        <option value="angular">Angular</option>
        <option value="Vue">Vue</option>
      </select>
      Angelegt am
      {' '}
      {accData.create_at}
    </>
  );
}
