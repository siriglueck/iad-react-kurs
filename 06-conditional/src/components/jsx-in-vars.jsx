export default function JsxInVars() {
    let inhalt;

    if ( new Date().getHours() < 12 ) {
        inhalt = <p>Guten Morgen</p>
    } else {
        inhalt = <p>Guten Tag</p> 
    }
    
    return <>
        <div> { inhalt } </div>
    </>
}