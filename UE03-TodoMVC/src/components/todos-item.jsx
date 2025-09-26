export function TodosItem({todo}) {
    return (
        <li className={todo.completed ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" defaultChecked={todo.completed} />
                <label>{todo.title}</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
        </li>
    )
}