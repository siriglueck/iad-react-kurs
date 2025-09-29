import { useEffect, useState } from 'react';

export function Weather() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=50.98&longitude=11.02&current=temperature_2m,rain,weather_code')
      .then(resp => resp.json())
      .then(data => setCurrent(data.current));
  }, []);

  return (
    <>
      <h2>Wetter</h2>
      Temperatur in
      {' '}
      {current?.temperature_2m}
      am
      {' '}
      {new Date(current?.time + 'Z').toLocaleString()}
    </>
  );
}
