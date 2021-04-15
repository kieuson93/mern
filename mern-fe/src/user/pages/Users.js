import React from 'react'
import UserList from '../components/UserList'

const Users = () => {
    const USERS = [
        {
            id: '1',
            name: 'crazy',
            image: 'https://picsum.photos/id/237/200/300',
            places: 3,
        },
        {
            id: '2',
            name: 'test',
            image: 'https://picsum.photos/id/1061/200/300',
            places: 3,
        },
        {
            id: '1',
            name: 'stuffs',
            image: 'https://picsum.photos/id/239/200/300',
            places: 3,
        },
    ]

    return <UserList items={USERS} />
}

export default Users
