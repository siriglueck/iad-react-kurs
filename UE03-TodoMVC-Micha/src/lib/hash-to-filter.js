export function hashToFilter() {
  return location.hash.slice(2) || 'all';
}
