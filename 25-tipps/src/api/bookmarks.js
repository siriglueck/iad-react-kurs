// const resourceUrl = 'https://cloud.lean-stack.de/api/public/bookmarks';

// .env - File bzw. Enviroment Variablen
const apiServer = import.meta.VITE_API_SERVER;
const resourceUrl = `${apiServer}/bookmarks`;

// CRUD Methoden - CreateReadUpdateDelete

export async function getAll() {
  fetch(resourceUrl);
}

export async function create(bookmark) {
  fetch(resourceUrl);
}

export async function update(bookmark) {}

export async function remove(bookmark) {}
