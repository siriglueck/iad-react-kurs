import { useState } from "react";

export default function Counter({label}) {

    console.log('Rendering Counter');
    
    // React 16.8: Hooks 
    const [count, setCount] = useState(0);

    //let count = 0;

    function inc() {
        setCount(count + 1);
        console.log(count); //Alter wert: zuletzt gesetzer Wert
    }



    return <>
        <div> {label}: {count} 
        <br />
        <button onClick={inc}>Increment</button>
        </div>
    </>
}