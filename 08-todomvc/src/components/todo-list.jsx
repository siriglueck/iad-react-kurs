import TodoItem from "./todo-item";

export default function TodoList( {todos} ) {
    return <>
        <ul className="todo-list">
            {todos.map(t => <TodoItem key={t.id} todo={t} /> )}
        </ul>
    </>
}