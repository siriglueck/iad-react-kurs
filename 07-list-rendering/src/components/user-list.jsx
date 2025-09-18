// this users is in one component oben

import UserItem from "./user-item";

export default function UserList( { users = [] } ) {
    return <>
        <div>
            <h2>User Liste</h2>
            <ul>
                {users
                //.filter((u) => u.city === 'Erfurt')
                .map((u) => <UserItem key={u.id} user={u}/>)}
            </ul>
            <p>Anzahl User: {users.length} </p>
        </div>
    </>
}

