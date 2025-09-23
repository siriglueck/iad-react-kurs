import { useRef, useState } from "react";

export function StateList() {

    // In State umsetzen
    const [points, setPoints] = useState([
        // {nr:1, x:10,y: 20},
        // {nr:1, x:10,y: 20},
        // {nr:1, x:10,y: 20},
    ]);
    const [color, setColor] = useState('#0000ff');
    const divRef = useRef(null);
    const thickRef = useRef(null);

    // Click zuordnen
    function createPoint(ev) {
        // neue Nr
        const nr = (points.at(-1)?.nr || 0) + 1;
        // x und y berechnen (aus divRef und ev)
        const divElt = divRef.current;
        const point = { nr, color, thickness: thickRef.current.value,
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
                    height: `${pos.thickness}px`,
                    width: `${pos.thickness}px`,
                    backgroundColor: pos.color || 'blue',
                    borderRadius: '50%',
                    transform: 'translate3d(-8px,-8px,0)',
                    transition: 'all 100ms ease-in-out'
                }}></div>
            ))}
        </div>
        <div>
            <input type="color" value={color} onChange={(ev)=> setColor(ev.target.value)} />
            <input ref={thickRef} type="range" min={1} max={16} defaultValue={8} />
        </div>
    </>
}