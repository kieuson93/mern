import React from 'react'
import { createMuiTheme } from '@material-ui/core'
import { deepPurple, teal } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: deepPurple,
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
})

export default theme
