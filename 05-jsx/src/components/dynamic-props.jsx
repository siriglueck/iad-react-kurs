const links = [
    { url: 'https://react.dev', title: 'React', farbe: 'green' },
    { url: 'vite.dev', title: 'Vite', farbe: 'red' }
];


export default function DynamicProps() {
    return (
        <>
            <button disabled={ true }> Click me </button>
            <a style={ { color: links[0].farbe } } href={links[0].url} target="_blank"> {links[0].title} </a>
            <a style={ { color: links[1].farbe } } href={ 'https://' + links[1].url } target="_blank"> {links[1].title} </a>
            {/* <a href="https://vite.dev">Vite</a> */}
        </>
    );
}