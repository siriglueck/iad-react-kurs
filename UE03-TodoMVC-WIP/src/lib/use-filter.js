import { useContext } from 'react';
import { FilterContext } from './filter-context';

// custom hook
export function useFilter() {
  const filter = useContext(FilterContext);

  // Best Practice
  if (filter === null) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return filter;
}
