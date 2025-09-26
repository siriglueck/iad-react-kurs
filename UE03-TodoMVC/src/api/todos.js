import { todos } from '../mock-data';

const url = 'https://jsonplaceholder.typicode.com/todos';

export function getAll() {
  return todos;
}

export function getAllCloud() {
  const response = fetch(url);
  return response;
  // the return from this is special, not just the response
}
