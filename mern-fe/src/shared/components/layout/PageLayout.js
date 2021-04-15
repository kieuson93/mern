import React from 'react'
import { Container } from '@material-ui/core'

const PageLayout = ({ children }) => {
    return <Container maxWidth="sm">{children}</Container>
}

export default PageLayout
