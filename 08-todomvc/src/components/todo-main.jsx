import TodoList from "./todo-list";

export default function TodoMain( { todos = [] } ) {
    //if (todos.length === 0) return null;

    // check wenn alle todos fertig sind
    // filter, map, every, some, slice
    // toSorted, toSpliced, toReversed -> erzeugt ein neues Array
    // join
    // const allCompleted1a = todos.filter( t => t.completed).length === todos.length;
    // const allCompleted1b = todos.filter( t => !t.completed).length === 0;
    const allCompleted = todos.every( t => t.completed );


    return <>
        <section className="main">
            <input id="toggle-all" defaultChecked={ allCompleted } className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
           <TodoList todos={ todos } />
        </section>
    </>
}