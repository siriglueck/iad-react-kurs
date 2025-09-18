export default function Operatoren({ count = 0, itemName = '' }) {

    return <>
        <p>
            { count === 0 ? 'zero' : count }
            { itemName.trim().length !== 0 && ` ${itemName}${count !== 1 ? 's' : ''}`}
        </p>
    </>
}