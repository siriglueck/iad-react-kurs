// Kompomemten (Funktionen) bekommen ihre Properties als erstes (und einziges) Argument
// Best Practice: Destructuring

/**
 * 
 * @param {{tn: { vorname: string, nachname: string, nr: number, klasse: string }}} props Teilnehmerdaten 
 * @returns 
 */

export default function ObjectComponentProps( { tn } ) {
    return <>
        <li> Nr:{tn.nr} {tn.nachname}, {tn.vorname}, klasse: {tn.klasse}</li>
    </>
}