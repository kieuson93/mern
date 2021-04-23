import React, { useState } from 'react'
import {
    Button,
    ButtonGroup,
    Container,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import { withRouter } from 'react-router'
import PageLayout from '../../shared/components/layout/PageLayout'

const useStyles = makeStyles({
    btn: {
        backgroundColor: 'primary',
        '&:hover': {
            backgroundColor: 'secondary',
        },
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20,
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
    radio: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
})

const NewPlace = ({ history }) => {
    const classes = useStyles()
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [numberOfPlaces, setNumberOfPlaces] = useState('0')

    const [titleError, setNameError] = useState(false)
    const [detailsError, setImageUrlError] = useState(false)
    const [numberOfPlacesError, setNumberOfPlacesError] = useState(false)

    const [error, setError] = React.useState(false)
    const [helperText, setHelperText] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setNameError(false)
        setImageUrlError(false)

        if (name === '') {
            setNameError(true)
        }

        if (imageUrl === '') {
            setImageUrlError(true)
        }

        if (numberOfPlaces === '') {
            setNumberOfPlacesError(true)
        }

        if (name && imageUrl && numberOfPlaces) {
            fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ name, imageUrl, numberOfPlaces }),
                // eslint-disable-next-line no-restricted-globals
            }).then(() => history.push('/'))
        }
    }

    return (
        <PageLayout>
            <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create new place
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setName(e.target.value)}
                    className={classes.field}
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={titleError}
                />

                <TextField
                    onChange={(e) => setImageUrl(e.target.value)}
                    className={classes.field}
                    label="Image Url"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    error={detailsError}
                />

                <TextField
                    onChange={(e) => setNumberOfPlaces(e.target.value)}
                    className={classes.field}
                    label="Number of places"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={numberOfPlacesError}
                />

                <ButtonGroup variant="contained">
                    <Button
                        className={classes.btn}
                        type="submit"
                        color="secondary"
                        variant="contained"
                        endIcon={<KeyboardArrowRightIcon />}
                    >
                        Submit
                    </Button>
                </ButtonGroup>
            </form>
        </PageLayout>
    )
}

export default withRouter(NewPlace)
