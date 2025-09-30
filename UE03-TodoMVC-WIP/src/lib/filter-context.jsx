import { createContext, useEffect, useState } from 'react';
import { hashToFilter } from './hash-to-filter';

export const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState(hashToFilter());

  // the listener, dont forget the dependency
  useEffect(() => {
    function handleChange() {
      // console.log('Hash Change');

      setFilter(hashToFilter());
    }
    window.addEventListener('hashchange', handleChange);

    // always set a clean up
    return () => window.removeEventListener('hashchange', handleChange);
  }, []);

  return <FilterContext value={filter}>{children}</FilterContext>;
}
