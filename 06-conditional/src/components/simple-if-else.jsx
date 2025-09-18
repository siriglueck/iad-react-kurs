export default function SimpleIfElse() {
    const zeit = new Date();

    if ( zeit.getHours() < 11 ) {
        return <p>Guten Morgen!</p>
    } else if (zeit.getHours() > 17) {
        return <p>Guten Abend!</p>
    } else {
        return <p>Guten Tag</p>
    }
    
}