import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import Avatar from '../../shared/components/UIElements/Avatar'
import CardElement from '../../shared/components/UIElements/CardElement'

import './UserItem.css'

const UserItem = ({ id, name, imageUrl, numberOfPlaces }) => {
    return (
        <div className="user-item">
            <div className="user-item__content">
                <CardElement>
                    <Link to={`/${id}/places`}>
                        <div className="user-item__image">
                            <Avatar image={imageUrl} alt={name} />
                        </div>
                        <div className="user-item__info">
                            <Typography
                                variant="h6"
                                color="textSecondary"
                                component="h2"
                                gutterBottom
                            >
                                {name}
                            </Typography>
                            <h3>
                                {numberOfPlaces}{' '}
                                {numberOfPlaces === 1 ? 'Place' : 'Places'}
                            </h3>
                        </div>
                    </Link>
                </CardElement>
            </div>
        </div>
    )
}

export default UserItem
