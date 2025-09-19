import TodoFilter from "./todo-filter";

export default function TodoToolBar( { todos } ) {
    const activeCount = todos.filter( t => !t.completed).length ;
    //const hasCompleted = todos.filter( t => t.completed).length !== 0; 
    const hasCompleted = todos.some( t => t.completed); 
    

    return <>
        <footer className="footer">
            <span className="todo-count"><strong> { activeCount } </strong> item{ activeCount > 1 && 's' } left</span>
            <TodoFilter />
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            { hasCompleted && <button className="clear-completed">Clear completed</button> }
        </footer>
    </>
}