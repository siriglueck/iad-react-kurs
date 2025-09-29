import { useEffect, useState } from 'react';

export function useOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleChange() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    // navigator.connection.addEventListener('change', () => setIsOnline(navigator.onLine));
    // TODO: Clean up
    return () => {
      window.removeEventListener('online', () => handleChange);
      window.removeEventListener('offline', () => handleChange);
    };
  }, []);

  return isOnline;
}
