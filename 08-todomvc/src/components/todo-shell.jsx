import { getAll } from "../api/todos";
import TodoInput from "./todo-input";
import TodoMain from "./todo-main";
import TodoToolBar from "./todo-toolbar";

const todos = getAll();

export default function TodoShell() {
    

    return <>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <TodoInput />
            </header>
            
            { todos.length > 0 && <>
                <TodoMain todos={ todos } />
                <TodoToolBar todos={ todos } />
            </>
            }

        </section>
    </>
}