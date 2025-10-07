import { useEffect, useState } from 'react';

export function useFetch(url) {
  // Simples Muster für Remote-Data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 200);

    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Daten konnten nicht geladen werden');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        }).catch(err => setError(err.message))
        .finally(() => {
          clearTimeout(timer);
          setIsLoading(false);
        })
      ;
    }, 1000);
  }, [url]);

  return { data, isLoading, error, setData };
}
