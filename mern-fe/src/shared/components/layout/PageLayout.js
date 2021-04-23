import React from 'react'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    page: {
        background: 'red',
        width: '100%',
    },
})

const PageLayout = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.page}>
            <Container className={classes.page}>{children}</Container>
        </div>
    )
}

export default PageLayout
