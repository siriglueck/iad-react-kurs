import TodoList from "./todo-list";

export default function TodoMain( { todos } ) {
    //if (todos.length === 0) return null;
    return <>
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
           <TodoList todos={ todos } />
        </section>
    </>
}