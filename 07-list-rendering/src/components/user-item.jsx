export default function UserItem({user}) {
    return <>
        <li>{user.name} ({user.city})</li>
    </>
}