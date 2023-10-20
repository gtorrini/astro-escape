import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, green, grey, red, yellow } from '@mui/material/colors';
import { Box, Fab, Grid, Typography } from '@mui/material'; 
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

    const handleClick = (isComms, message) => {
        setActivated(isComms);
        setDisplay(message);
    }

    return (
        <>
            <Box sx={{my: 5}}>
                <Typography variant="h6" gutterBottom>
                    How Does This Thing Work?
                </Typography>
                <Typography variant="body1">
                    You want to send out a distress signal, but you misplaced your user manual! <br/> Play around with the control panel below to activate the correct subsystem.
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
                    mb: 5,
                    width: '35%'
                }}
            >
                <ThemeProvider theme={panelColors}>
                    <Fab 
                        aria-label="electrical power"
                        color="white"
                        onClick={() => {handleClick(false, 'ELECTRICAL POWER SUBSYSTEM')}}
                        sx={{ mx: 1, my: 2}}
                    >
                        <ElectricBoltIcon></ElectricBoltIcon>
                    </Fab>
                    <Fab
                        aria-label="propulsion"
                        color="red"
                        onClick={() => {handleClick(false, 'PROPULSION SUBSYSTEM')}}
                        sx={{mx: 1, my: 2}}
                    >
                        <RocketLaunchIcon></RocketLaunchIcon>
                    </Fab>
                    <Fab
                        aria-label="attitude and orbit control"
                        color="yellow"
                        onClick={() => {handleClick(false, 'ATTITUDE & ORBIT CONTROL SUBSYSTEM')}}
                        sx={{mx: 1, my: 2}}
                    >
                        <SwitchAccessShortcutIcon></SwitchAccessShortcutIcon>
                    </Fab>
                    <Fab
                        aria-label="communications and data handling"
                        color="green"
                        onClick={() => {handleClick(true, 'COMMUNICATIONS & DATA HANDLING SUBSYSTEM')}}
                        sx={{mx: 1, my: 2}}
                    >
                        <SsidChartIcon></SsidChartIcon>
                    </Fab>
                    <Fab
                        aria-label="environmental control and life support"
                        color="blue"
                        onClick={() => {handleClick(false, 'ENVIRONMENTAL CONTROL & LIFE SUPPORT SUBSYSTEM')}}
                        sx={{mx: 1, my: 2}}
                    >
                        <SensorOccupiedIcon></SensorOccupiedIcon>
                    </Fab>
                </ThemeProvider>
            </Box>
            <Grid container>
                <Grid item xs={6}>
                    <BackButton handleClick={props.back}></BackButton>
                </Grid>
                <Grid item xs={6}>
                    {activated &&
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