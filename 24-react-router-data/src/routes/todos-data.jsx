import { Form, useLoaderData } from 'react-router';
import { create, getAll } from '../api/todos';

// here we can write action and loader here in the same file, easy to read
export async function loader() {
  const todos = await getAll();
  return { todos };
}

export async function action({ request }) {
  const formData = await request.formData();
  const task = formData.get('task');
  await create(task);
}

export default function TodosDataRoute() {
  const { todos } = useLoaderData();

  return (
    <div>
      <h2>Todos</h2>
      <Form>
        {/* preventDefault is in this action already */}
        <input name="task" placeholder="Was liegt an?" />
      </Form>
      <ul>
        { todos.map(t => <li key={t.id}>{t.task}</li>) }
      </ul>
    </div>
  );
}
