import { useEffect, useState } from 'react';

export function Clock({ delay = 5 }) {
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());

  // This create an endless loop
  // because of first initial render,
  // and then the render inside trigger another render
  // setInterval(() => {
  //   setTime(new Date());
  //   console.log('Time Update');
  // }, 1000);

  // This when we click toggle to hide it the render countinue somehow
  // so we need to do something like unmount it

  // Effect on iniitial render - also after mount
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      console.log('Time Update');
    }, 1000);

    // React ruft diese Funktion auf, wenn die Komponente 'unmounted' wird.
    // Clean up function
    return () => clearInterval(timer);
  }, []);

  // ------------------
  // Effect on delay(prop) change - auch initial
  // In das Dependency-Array kommen in der Regel alle states und props
  // die genutzt werden im Effect-Handler
  useEffect(() => {
    const timer = setInterval(() => {
      setTime2(new Date());
      console.log('Time Update');
    }, delay * 1000);

    // React ruft diese Funktion auf, wenn der Effekt neu ausfeführt (davor).
    return () => clearInterval(timer);
  }, [delay]);

  return (
    <>
      <div>
        <p>{time.toLocaleTimeString()}</p>
        <p>{time2.toLocaleTimeString()}</p>
      </div>
    </>
  );
}
