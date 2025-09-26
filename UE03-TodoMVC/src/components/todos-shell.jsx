import { getAll } from "../api/todos";
import { TodosInput } from "./todos-input";
import { TodosMain } from "./todos-main";
import { TodosToolbar } from "./todos-toolbar";

const todos = getAll();

export function TodosShell() {

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <TodosInput />
            </header>

            {todos.length > 0 && <>
                <TodosMain todos={todos} />
                <TodosToolbar todos={todos} />
            </>
            }
        </section>
    );
}