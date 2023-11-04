import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, green, grey, red, yellow } from '@mui/material/colors';
import { Box, Button, Fab, Grid, TextField, Typography } from '@mui/material'; 
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import { BackButton, NextButton } from './NavButtons.jsx';

const screen = grey[900];
const frame = grey[400];

const panelColors = createTheme({
    palette: {
        blue: {
            main: blue[500],
        },
        green: {
            main: green[500],
        },
        red: {
            main: red[500],
        },
        white: {
            main: '#ffffff',
        },
        yellow: {
            main: yellow[500],
        },
    }
});

export default function Controls(props) {
    const [activated, setActivated] = useState(false);
    const [display, setDisplay] = useState('WELCOME');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [attempts, setAttempts] = useState(0)
    const [send, setSend] = useState(false);

    const handleActivate = (isComms, message) => {
        setActivated(isComms);
        setDisplay(message);
    }

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
            <Box sx={{my: 5, maxWidth: '60%', mx: 'auto'}}>
                <Typography variant="h5" gutterBottom>
                    Challenge #3
                </Typography>
                <Typography variant="body1">
                    You need to send a distress signal, but in your panic, you spilled coffee all over the schematics in your manual. Use the control panel below to activate the correct subsystem.
                </Typography>
            </Box>
            <Box 
                sx={{
                    backgroundColor: screen,
                    border: 20,
                    borderColor: frame,
                    mx: 'auto',
                    mb: 3,
                    textAlign: 'center',
                    width: '50%'
                }}
            >
                <p className='screen'>{display}</p>
            </Box>
            <Box
                sx={{
                    backgroundColor: frame,
                    borderRadius: '20px',
                    mx: 'auto',
                    mb: 3,
                    width: '35%'
                }}
            >
                <ThemeProvider theme={panelColors}>
                    <Fab 
                        aria-label="electrical power"
                        color="white"
                        onClick={() => {handleActivate(false, 'ELECTRICAL POWER SUBSYSTEM')}}
                        sx={{ mx: 1, my: 2}}
                    >
                        <ElectricBoltIcon></ElectricBoltIcon>
                    </Fab>
                    <Fab
                        aria-label="propulsion"
                        color="red"
                        onClick={() => {handleActivate(false, 'PROPULSION SUBSYSTEM')}}
                        sx={{mx: 1, my: 2}}
                    >
                        <RocketLaunchIcon></RocketLaunchIcon>
                    </Fab>
                    <Fab
                        aria-label="attitude and orbit control"
                        color="yellow"
                        onClick={() => {handleActivate(false, 'ATTITUDE & ORBIT CONTROL SUBSYSTEM')}}
                        sx={{mx: 1, my: 2}}
                    >
                        <SwitchAccessShortcutIcon></SwitchAccessShortcutIcon>
                    </Fab>
                    <Fab
                        aria-label="communications and data handling"
                        color="green"
                        onClick={() => {handleActivate(true, 'COMMUNICATIONS & DATA HANDLING SUBSYSTEM')}}
                        sx={{mx: 1, my: 2}}
                    >
                        <SsidChartIcon></SsidChartIcon>
                    </Fab>
                    <Fab
                        aria-label="environmental control and life support"
                        color="blue"
                        onClick={() => {handleActivate(false, 'ENVIRONMENTAL CONTROL & LIFE SUPPORT SUBSYSTEM')}}
                        sx={{mx: 1, my: 2}}
                    >
                        <SensorOccupiedIcon></SensorOccupiedIcon>
                    </Fab>
                </ThemeProvider>
            </Box>
            <Box sx={{mb: 5}}>
                <TextField 
                    error={error !== null}
                    disabled={activated === false}
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
                <Button 
                    id="distress-submit"
                    disabled={message === null}
                    label="Submit"
                    variant="contained"
                    onClick={() => {handleSubmit(message)}}
                    sx={{ ml: 2 , mt: 1}}
                >Submit</Button>
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

Controls.propTypes = {
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
};