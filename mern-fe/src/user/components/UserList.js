import React, { useEffect, useState } from 'react'
import UserItem from './UserItem'
import { withRouter } from 'react-router'

import './UserList.css'
import { Container, Grid } from '@material-ui/core'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then((res) => res.json())
            .then((users) => setUsers(users))
    }, [])

    if (!users || users.length === 0) {
        return (
            <div className="center">
                <h2>No users found</h2>
            </div>
        )
    }

    return (
        <Grid container spacing={3}>
            {users.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <UserItem
                        key={user.id}
                        id={user.id}
                        imageUrl={user.imageUrl}
                        name={user.name}
                        numberOfPlaces={user.numberOfPlaces}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default withRouter(UserList)
