import React from 'react'

const UserItem = ({ id, name, image, place }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
        </div>
    )
}

export default UserItem
