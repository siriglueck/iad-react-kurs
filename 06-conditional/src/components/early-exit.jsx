export default function EarlyExit( { noten = [] } ) {
    
    if (noten.length === 0) {
        return <p>Es liegen noch keine Noten vor.</p>
    }

    const sum = noten.reduce ( (summe, note) => summe + note, 0 );
    const avg = sum / noten.length;

    return <>
        <p>Dein Notenschnitt: { avg }</p>
    </>
}