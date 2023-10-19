import { React, useState } from 'react';
import { Box, Button, Fade, TextField } from '@mui/material';

export default function Clue1() {
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
            <h4>Send out an effective distress signal. </h4>
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
            {message !== null && send===true &&
                <Box>
                    <Fade in={send} timeout={10}><p>Distress signal sent!</p></Fade>
                </Box>
            }
        </>
    )
}