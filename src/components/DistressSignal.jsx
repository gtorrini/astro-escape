import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { BackButton, NextButton } from './NavButtons.jsx';

export default function Signal(props) {
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [attempts, setAttempts] = useState(0)
    const [send, setSend] = useState(false);

    const handleSubmit = (text) => {
        const count = attempts + 1;
        setAttempts(attempts + 1);
        if (text.toLowerCase().includes('sos')) {
            setError(null);
            setSend(true);
        } else {
            switch (count) {
                case (1):
                    setError('What is the shortest message you could send?')
                    break;
                default:
                    setError('Hint: can you keep it to 3 letters?')
            }
        }
    }

    return (
        <>
            <Box sx={{my: 5}}>
                <Typography variant="h6" gutterBottom>
                    Send out an effective distress signal.
                </Typography>
                <TextField 
                    error={error !== null}
                    id="distress-signal"
                    label="Message"
                    inputProps={{
                        maxLength: 25,
                    }}
                    helperText = {error}
                    onChange={e => {
                        setMessage(e.target.value)
                        setError(null);
                    }}
                ></TextField>
                {message !== null &&
                    <Button 
                        id="distress-submit"
                        label="Submit"
                        variant="contained"
                        onClick={() => {handleSubmit(message)}}
                        sx={{ ml: 2 , mt: 1}}
                    >Submit</Button>
                }
            </Box>
            <Grid container>
                <Grid item xs={6}>
                    <BackButton handleClick={props.back}></BackButton>
                </Grid>
                <Grid item xs={6}>
                    {send &&
                        <NextButton handleClick={props.next}></NextButton>
                    }
                </Grid>
            </Grid>
        </>
    )
}

Signal.propTypes = {
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
};