import React from 'react'
import UserItem from './UserItem'

import './UserList.css'

const UserList = ({ items }) => {
    if (!items || items.length === 0) {
        return (
            <div className="center">
                <h2>No users found</h2>
            </div>
        )
    }

    return (
        <ul>
            {items.map((user) => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    place={user.place}
                />
            ))}
        </ul>
    )
}

export default UserList
