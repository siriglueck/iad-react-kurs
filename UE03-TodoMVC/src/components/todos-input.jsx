import { useState } from 'react';

export function TodosInput({ onCreate }) {
  const [title, setTitle] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    // send the title to the parent through the callback function
    if (title.trim().length > 0) {
      console.log('Creating', title);
      onCreate(title.trim());
    }
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="new-todo" value={title} onChange={e => setTitle(e.target.value)} placeholder="What needs to be done?" autoFocus />
    </form>
  );
}
