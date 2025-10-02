import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { create, getAll, remove } from '../api/todos';

export default function TodosRoute() {
  // const query = useFetch('https://cloud.lean-stack.de/api/public/todos');
  // replace with TanStack
  const query = useQuery({ queryKey: ['todos'], queryFn: getAll });
  const queryClient = useQueryClient();
  // Mutation
  const createMutation = useMutation({
    mutationFn: create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  const deleteMutation = useMutation({
    mutationFn: remove,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  function handleCreate(formData) {
    const task = formData.get('task');
    createMutation.mutate(task);

    // axios.post('https://cloud.lean-stack.de/api/public/todos', {
    //   task, done: false,
    // }).then(response => query.setData(todos => [...todos, response.data]));

    // fetch('https://cloud.lean-stack.de/api/public/todos', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ task, done: false }),
    // })
    //   .then(resp => resp.json())
    //   .then(console.log);
  }

  function handleDelete(id) {
    deleteMutation.mutate(id);
    // axios.delete('https://cloud.lean-stack.de/api/public/todos/' + id)
    //   .then(() => query.setData(todos => todos.filter(t => t.id != id)));

    // fetch('https://cloud.lean-stack.de/api/public/todos/' + id, {
    //   method: 'DELETE',
    // });
  }

  return (
    <div>
      <h2>Todos</h2>
      <form action={handleCreate}>
        {/* preventDefault is in this action already */}
        <input name="task" placeholder="Was liegt an?" />
      </form>
      { query.isLoading && <p>'Data is loading'</p> }
      <ul>
        { query.data?.map(t => (
          <li key={t.id}>
            {t.task}
            <button onClick={() => handleDelete(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
