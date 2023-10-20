import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ButtonGroup, Grid, IconButton, Typography } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ClearIcon from '@mui/icons-material/Clear';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, orange, yellow, green, grey, blue, indigo, purple } from '@mui/material/colors';
import { BackButton, NextButton } from './NavButtons.jsx';

const screen = grey[900];
const frame = grey[400];

const rainbow = createTheme({
    palette: {
        red: {
            main: red[500]
        },
        orange: {
            main: orange[500]
        },
        yellow: {
            main: yellow[500]
        },
        green: {
            main: green[500]
        },
        blue: {
            main: blue[500]
        },
        indigo: {
            main: indigo[500]
        },
        violet: {
            main: purple[500]
        },
    },
});

export default function Cipher(props) {
    // const [decoded, setDecoded] = useState(false);
    const [display, setDisplay] = useState('SEND RESPONSE');
    // const [error, setError] = useState(null)

    const handleKey = (message, letter) => {
        if (message.length < 20) {
            const nextMessage = message.concat(letter);
            setDisplay(nextMessage);
        } 
    }

    const handleBackspace = (message) => {
        if (message.length === 1) {
            setDisplay('');
        } else {
            const nextMessage = message.slice(0, -1);
            setDisplay(nextMessage);
        }
    }

    
    return (
        <>
            <Box sx={{my: 5}}>
                <Typography variant="h6">
                    A Sign from Above
                </Typography>
                <Typography variant="body1">
                    You received a message, but it seems to be encoded. Decode it and send the appropriate response.
                </Typography>
            </Box>
            <Box 
                sx={{
                    backgroundColor: screen,
                    border: 20,
                    borderColor: frame,
                    mx: 'auto',
                    mt: 5,
                    mb: 2,
                    textAlign: 'center',
                    width: '60%'
                }}
            >
                <p className='screen'>{display}</p>
            </Box>
            <Box
                sx={{
                    backgroundColor: frame,
                    borderRadius: '20px',
                    mx: 'auto',
                    mb: 5,
                    width: '60%'
                }}
            >
            <ThemeProvider theme={rainbow}>
                <ButtonGroup variant="contained" aria-label="color buttons" sx={{my: 2}}>
                    <Button color="red" onClick={() => handleKey(display, 'R')}>Red</Button>
                    <Button color="orange" onClick={() => handleKey(display, 'O')}>Orange</Button>
                    <Button color="yellow" onClick={() => handleKey(display, 'Y')}>Yellow</Button>
                    <Button color="green" onClick={() => handleKey(display, 'G')}>Green</Button>
                    <Button color="blue" onClick={() => handleKey(display, 'B')}>Blue</Button>
                    <Button color="indigo" onClick={() => handleKey(display, 'I')}>Indigo</Button>
                    <Button color="violet" onClick={() => handleKey(display, 'V')}>Violet</Button>
                </ButtonGroup>
            </ThemeProvider>
            <IconButton aria-label="backspace" sx={{ml: 1}} onClick={() => handleBackspace(display)} disabled={display.length === 0}>
                <BackspaceIcon></BackspaceIcon>
            </IconButton>
            <IconButton aria-label="clear" sx={{ml: 1}} disabled={display.length === 0}>
                <ClearIcon></ClearIcon>
            </IconButton>
            </Box>
            <Grid container>
                <Grid item xs={6}>
                    <BackButton handleClick={props.back}></BackButton>
                </Grid>
                <Grid item xs={6}>
                    <NextButton handleClick={props.next}></NextButton>
                </Grid>
            </Grid>
        </>
    )
}

Cipher.propTypes = {
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
}