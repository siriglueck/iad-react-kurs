import { TodosList } from "./todos-list";

export function TodosMain({ todos = [] }) {
    // filter, map, every, some, slice
    // toSorted, toSpliced, toReversed
    
    const allCompleted = todos.every(t => t.completed) ;

    return (
        <section className="main">
            <input id="toggle-all" defaultChecked={allCompleted} className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <TodosList todos={todos} />
        </section>
    );
}