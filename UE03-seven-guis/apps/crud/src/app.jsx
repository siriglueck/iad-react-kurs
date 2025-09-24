import { useRef, useState } from "react";

function App() {

  // state for List mapping
  const [users, setUsers] = useState([
    { id: 1, name: 'Donald', surname: 'Duck' },
    { id: 2, name: 'Micky', surname: 'Maus' },
    { id: 3, name: 'Scooby', surname: 'Doo' },
    { id: 4, name: 'Pika', surname: 'Chu' }
  ]);
  // state for filtering
  const [filter, setFilter] = useState('');

  // state - to define if it is in edited mode now
  const [editMode, setEditMode] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const [selectedUser, setSelectedUser] = useState(0);

  function handleFilterChange(filter) {
    setSelectedUser(0);
    setFilter(filter);
  }

  const dialogRef = useRef(null);


  function createOrUpdateUser(mode) {
    setEditMode(mode);
    if (mode === 'create') {
      setName('');
      setSurname('');
    }
    else {
      const user = users.find(u => u.id === selectedUser);
      setName(user.name);
      setSurname(user.surname);
    }
    dialogRef.current.showModal();
  }


  function commitEdit() {
    if (editMode === 'create') {
      const user = {
        id: (users.at(-1)?.id ?? 0) + 1,
        name,
        surname,
      };
      setUsers([...users, user]);
    }
    else {
      setUsers(users.map(u =>
        (u.id !== selectedUser) ? u : ({ ...u, name, surname })));
    }
    dialogRef.current.close();
  }

  function cancelEdit() {
    dialogRef.current.close();
  }

  function deleteUser() {
    setUsers(users.filter(u => u.id !== selectedUser));
    setSelectedUser(0);
  }



  return (
    <main>
      <h1 className="app-title">CRUD</h1>
      <section className="app">
        <div className="box">
          <label htmlFor="filter">Filter prefix:</label>
          <input id="filter" value={filter} onChange={ev => handleFilterChange(ev.target.value)} type="text" />
        </div>
        <div className="box bordered">
          <div className="box">
            <option style={{ display: 'none' }} value={0}>- user auswählen -</option>
            <select size={8} value={selectedUser} onChange={ev => setSelectedUser(Number(ev.target.value))}>
              {users.filter(u => (u.name + u.surname).toLowerCase().includes(filter.toLowerCase())).map((u) => <option key={u.id} value={u.id}>{`${u.surname}, ${u.name}`}</option>)}
            </select>
          </div>
          <dialog ref={dialogRef}>
            <div>
              <div className="box">
                <label htmlFor="name">Name : </label>
                <input id="name" type="text" value={name} onChange={ev => setName(ev.target.value)} />
              </div>
              <div className="box">
                <label htmlFor="surname">Surname : </label>
                <input id="surname" type="text" value={surname} onChange={ev => setSurname(ev.target.value)} />
              </div>
              <div className="box">
                <button onClick={commitEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            </div>
          </dialog>
        </div>
        <div className="box">
          <button onClick={() => createOrUpdateUser('create')}>Create</button>
          <button onClick={() => createOrUpdateUser('update')} disabled={selectedUser === 0}>Update</button>
          <button onClick={() => deleteUser()} disabled={selectedUser === 0}>Delete</button>
        </div>
      </section>
    </main>
  );
}

export default App;
