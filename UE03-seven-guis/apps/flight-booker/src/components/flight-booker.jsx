import { useState } from "react";

export function FlightBooker() {

  const [flightType, setFlightType] = useState('one-way');
  const returnDateDisabled = flightType === 'one-way';

  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  function showAlert() {
    flightType === 'one-way' ?
      alert('You have book a ' + flightType + ' flight on ' + departDate + '.')
      : alert('You have book a ' + flightType + ' flight, departing on ' + departDate + ' &  returning on ' + returnDate + '.');
  }

  return (
    <main>
      <h1 className="app-title">Flight Booker</h1>
      <section className="app">
        <select value={flightType} onChange={ev => setFlightType(ev.target.value)}>
          <option value="one-way">Nur Hinflug</option>
          <option value="return">Hin und Rückflug</option>
        </select>
        <input type="date" value={departDate} onChange={ev => setDepartDate(ev.target.value)} />
        <input disabled={returnDateDisabled} type="date" value={returnDate} onChange={ev => setReturnDate(ev.target.value)} />
        <button disabled={false} className="btn" onClick={showAlert}>Buchen</button>
      </section>
    </main>
  );
}
