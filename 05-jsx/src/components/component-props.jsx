// Kompomemten (Funktionen) bekommen ihre Properties als erstes (und einziges) Argument

export default function ComponentProps(props) {
    return <>
        <li> Nr:{props.nr} {props.nachname}, {props.vorname}, klasse: {props.klasse}</li>
    </>
}