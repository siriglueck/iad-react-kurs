export function hashToFilter() {
  let filter = location.hash.slice(2) || 'all';

  // so that it doesnt show input in the url address
  if (!['all', 'active', 'completed'].includes(filter)) {
    filter = 'all';
    location.hash = '/';
  }

  return filter;
}
