import { useState } from "react"
import { CounterDisplay } from "./counter-display";
import { CounterAction } from "./counter-action";

export function Counter({ start = 0 }) {

    const [count, setCount] = useState(start);

    function inc() {
        // setCount(count+1);
        setCount(latestCount => latestCount + 1); // State per Callback setzen
    }

    return <>
        <div className="counter">
            <CounterDisplay count={count} label='Zähler : ' />
            {/* <button onClick={inc}>Incre</button> */}
            <div>
                <CounterAction label='+' onAction={inc} />
                <CounterAction label='-' onAction={()=> setCount(count - 1)} />
            </div>
        </div>
    </>
}