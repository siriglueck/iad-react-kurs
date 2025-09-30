import { todos } from '../mock-data';

// const url = 'https://jsonplaceholder.typicode.com/todos';
const url = 'https://cloud.lean-stack.de/api/public/todos';

export function getAll() {
  console.log('read mock data');
  return todos;
}

export function getAllCloud() {
  return fetch(url).then(r => r.json());
}
