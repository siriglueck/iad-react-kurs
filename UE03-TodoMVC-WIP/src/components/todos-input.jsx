import { useState } from 'react';

export function TodosInput({ onCreate }) {
  const [title, setTitle] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    if (title.trim().length > 0) {
      console.log('Create', title);
      onCreate(title.trim());
    }
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} className="new-todo" placeholder="What needs to be done?" autoFocus />
    </form>
  );
}

export function TodosInputModern({ onCreate }) {
  // const ref = useRef(null);

  // action Handler macht selsbt preventDefault und Formular - Reset und bekommt
  // zusätzlich die Formular-Daten übergeben
  function handleAction(formData) {
    let title = formData.get('title');
    if (title) {
      console.log('Create', title);
      onCreate(title.trim());
    }
  }

  return (
    <form action={handleAction}>
      <input name="title" className="new-todo" placeholder="What needs to be done?" autoFocus />
    </form>
  );
}
