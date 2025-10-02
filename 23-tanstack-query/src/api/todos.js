import axios from 'axios';

const url = 'https://cloud.lean-stack.de/api/public/todos';

// without the keyword async, then we need to write then
export async function getAll() {
  const response = await axios.get(url);
  return response.data;
}

export async function create(task) {
  const response = await axios.post(url, { task, done: false });
  return response.data;
}
export async function remove(id) {
  await axios.delete(`${url}/${id}`);
}

export async function update(id, changes) {
  // PATCH (partial update some fields)
  // PUT (overwrite whole object)
  const response = axios.patch(`${url}/${id}`, changes);
  return (await response).data;
}
