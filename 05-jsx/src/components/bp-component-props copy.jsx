// Kompomemten (Funktionen) bekommen ihre Properties als erstes (und einziges) Argument
// Best Practice: Destructuring

/**
 * 
 * @param {{ vorname: string, nachname: string, nr: number, klasse: string }} props Teilnehmerdaten 
 * @returns 
 */

export default function BpComponentProps( { vorname, nachname, klasse, nr} ) {
    return <>
        <li> Nr:{nr} {nachname}, {vorname}, klasse: {klasse}</li>
    </>
}