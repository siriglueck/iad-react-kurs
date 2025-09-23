import { useRef, useState } from "react";

export function StateList() {

    // In State umsetzen

    const [points, setPoints] = useState([
        { nr: 1, x: 47, y: 176 },
        { nr: 2, x: 147, y: 17 },
        { nr: 3, x: 89, y: 120 }
    ]);

    const divRef = useRef(null);

    // Click zuordnen
    function createPoint(ev) {
        // neue Nr
        const nr = (points.at(-1)?.nr || 0) + 1;
        // x und y berechnen (aus divRef und ev)
        const divElt = divRef.current;
        const point = { nr,
            x: ev.pageX - divElt.offsetLeft,
            y: ev.pageY - divElt.offsetTop
        };
        // Neuen Punkt der Liste hinzufügen(!)
        // point.push(point);
        // setPoints(points.concat(point));
        setPoints([...points, point]);

    }

    return <>
        <div ref={divRef} onClick={createPoint} style={{
            borderStyle: 'solid',
            height: '200px',
            width: '400px',
            position: 'relative',
            overflow: 'clip'
        }}>
            {points.map((pos =>
                <div key={pos.nr} style={{
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
            ))}
        </div>
        <div>
            <input type="color" value={'#0000ff'} />
            <input type="range" min={1} max={16} value={16} />
        </div>
    </>
}