import { useState } from "react";

export default function MakeBigger() {

    const [size, setSize] = useState(30);
    
    function change(change){
        setSize(size+change)
    }


    return <>
        <button onClick={() => { setSize(size + 10) }}>Make Bigger</button>
        <button onClick={() => { setSize(size - 10) }}>Make Smaller</button>
        <button onClick={() => { change(50) }}> +50 px </button>
        <button onClick={() => { change(-50) }}> -50 px </button>
        <hr />
        <div style={{
            backgroundColor: 'green',
            width: `${size}px`,
            height: `${size}px`
        }}></div>
        <hr />
    </>
}