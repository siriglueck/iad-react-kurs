import UserList from "./components/user-list"

// have it here, so that it is easy for testing
const users = [
  { id: 1, name: 'Max Maier', city: 'Erfurt' },
  { id: 2, name: 'Hans Wurst', city: 'Erfurt' },
  { id: 3, name: 'Rita Müller', city: 'Cottbus' },
  { id: 4, name: 'Karin Kunz', city: 'Marburg' },
  { id: 5, name: 'Klaus Schmitt', city: 'Berlin' }
]


function App() {
 
  return (
    <div>
      <h1>List Rendering</h1>
      <UserList users={users} />
    </div>
  )
}

export default App
