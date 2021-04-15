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

const NewPlace = () => {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [radioValue, setRadioValue] = React.useState('money')

    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    const [error, setError] = React.useState(false)
    const [helperText, setHelperText] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }

        if (details === '') {
            setDetailsError(true)
        }

        if (radioValue === '') {
            setHelperText('Please select an option.')
            setError(true)
        }

        if (title && details) {
            console.log(title, details, radioValue)
        }
    }

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value)
        setHelperText(' ')
        setError(false)
    }

    return (
        <Container>
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
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Note title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={titleError}
                />

                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    error={detailsError}
                />

                <FormControl
                    component="fieldset"
                    error={error}
                    className={classes.radio}
                >
                    <FormLabel component="legend">Note Category</FormLabel>
                    <RadioGroup
                        aria-label="Note Category"
                        name="note_type"
                        value={radioValue}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel
                            value="money"
                            control={<Radio />}
                            label="Money"
                        />
                        <FormControlLabel
                            value="todo"
                            control={<Radio />}
                            label="Todo"
                        />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                </FormControl>

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
        </Container>
    )
}

export default NewPlace
