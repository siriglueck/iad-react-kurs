import { useRef, useState } from "react";

// React nutzt an diversen "Stellen" das Muster der
// Unveränderlichkeit bzw. Immutability

export function StateObject() {

    //const pos = { x: 50, y: 50 };
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const divRef = useRef(null);


    // function toRight() {
    //     //pos.x += 10;
    //     //setPos(pos);
    //     //we have to clone it in order to assign the new value in an object
    //     setPos({ ...pos, x: pos.x + 10 }); // Muster
    // }

    function move(hori, verti) {
        const x = pos.x + hori < 0 ? 0 :
                  pos.x + hori > 400 ? 400 :
                  pos.x + hori;
        const y = pos.y + verti < 0 ? 0 :
                  pos.y + verti > 200 ? 200 : 
                  pos.y + verti;
        setPos({ x, y });
    }

    function moveTo(ev) {
        const divElt = divRef.current;
        setPos({
            x: ev.pageX - divElt.offsetLeft,
            y: ev.pageY - divElt.offsetTop
        });
    }


    return <>
        <div ref={divRef} onClick={moveTo} style={{
            borderStyle: 'solid',
            height: '200px',
            width: '400px',
            position: 'relative',
            overflow: 'clip'
        }}>
            <div style={{
                position: 'absolute',
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                height: '16px',
                width: '16px',
                backgroundColor: 'blue',
                borderRadius: '16px',
                transform: 'translate3d(-8px,-8px,0)',
                transition: 'all 100ms ease-in-out'
            }}></div>
        </div>
        <div>
            {/* <button onClick={()=> setPos({ ...pos, y: pos.y - 10 })}>Up</button>
            <button onClick={()=> setPos({ ...pos, y: pos.y + 10 })}>Down</button>
            <button onClick={()=> setPos({ ...pos, x: pos.x - 10 })}>Left</button>
            <button onClick={toRight}>Right</button> */}

            <button onDoubleClick={() => move(0, -20)} onClick={() => move(0, -10)}>Up</button>
            <button onDoubleClick={() => move(0, 20)} onClick={() => move(0, 10)}>Down</button>
            <button onDoubleClick={() => move(-20, 0)} onClick={() => move(-10, 0)}>Left</button>
            <button onDoubleClick={() => move(20, 0)} onClick={() => move(10, 0)}>Right</button>


        </div>
    </>
}