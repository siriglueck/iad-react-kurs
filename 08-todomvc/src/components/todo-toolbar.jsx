import TodoFilter from "./todo-filter";

export default function TodoToolBar() {
    return <>
        <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count"><strong>0</strong> item left</span>
            {/* <!-- Remove this if you don't implement routing --> */}
            <TodoFilter />
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button className="clear-completed">Clear completed</button>
        </footer>
    </>
}