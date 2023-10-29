import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Fade, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'; 
import { grey, yellow } from '@mui/material/colors';
import { BackButton, NextButton } from './NavButtons.jsx';

const page = yellow[50];
const screen = grey[900];
const frame = grey[400];

export default function Protocol(props) {
    const [choice, setChoice] = useState(null);
    const [correct, setCorrect] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChoice = (event) => {
        setChoice(event.target.value);
        if (event.target.value === 'help') {
            setCorrect(true);
            setMessage(null);
        } else if (event.target.value === 'halt') {
            setCorrect(false);
            setMessage('If you keep moving closer, you might eventually enter the realm where stable orbits become impossible. Without changing your trajectory, you could spiral in!');
        } else if (event.target.value === 'leave') {
            setCorrect(false);
            setMessage('This could work around a stellar-mass black hole (only a couple of times the mass of the Sun), but this is a BIG one. Are you sure you have enough fuel to escape?')
        }
    }

    return (
        <>
        <Box sx={{my: 5, maxWidth: '60%', mx: 'auto'}}>
            <Typography variant="h6" gutterBottom>
                Decisions, Decisions
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Read the instructions in the mission manual. Use your discretion and reports from the monitoring panel to determine the best protocol.
            </Typography>
        </Box>
        <Box
            sx={{
                backgroundColor: page,
                mb: 3,
                mx: 'auto',
                padding: 2,
                textAlign: 'left',
                width: '50%',
            }}
        >
            <p className='page'>Black holes are not galactic vacuum cleaners; they will not indiscriminately consume everything in their path. Missions can fly calmly around both stellar-mass and supermassive black holes, as long as they keep a safe distance. Keep in mind that the bigger the black hole (and the closer you are to it), the faster the velocity required to escape.</p>
        </Box>
        <Box 
            sx={{
                backgroundColor: screen,
                border: 20,
                borderColor: frame,
                mb: 3,
                mx: 'auto',
                padding: 2,
                textAlign: 'left',
                width: '70%'
            }}
        >
            <p className='screen'> <b>INSIGHTS</b> <br/> The black hole is 6 million times the mass of the Sun, making it <em>supermassive</em>. </p>
            <p className='screen'> <b>LOCATION</b> <br/> You are outside of the black hole&#39;s event horizon, or &#34;point of no return&#34; inside which not even light can escape. However, you are inside the influence radius, a region where the black hole&#39;s gravity dominates that of nearby stars.</p>
            <p className='screen'> <b>FUELING</b> <br/> The primary fuel tank is at 17% capacity, and only one of your reserve tanks is remaining.</p>
        </Box>
        <Box 
            sx={{
                mb: 5,
                mx: 'auto',
                width: '50%'
            }}
        >
            <FormControl>
                <RadioGroup
                    value={choice}
                    onChange={(e) => {
                        setMessage;
                        handleChoice(e);
                    }}
                >
                    <FormControlLabel
                        value="halt"
                        control={<Radio />}
                        label="Do nothing"
                    ></FormControlLabel>
                    <FormControlLabel
                        value="help"
                        control={<Radio />}
                        label="Send a distress signal"
                    ></FormControlLabel>
                    <FormControlLabel
                        value="leave"
                        control={<Radio />}
                        label="Fly away"
                    ></FormControlLabel>
                </RadioGroup>
            </FormControl>
            {message !== null &&
                <Fade in={correct === false} timeout={7500}><p>{message}</p></Fade>
            }
        </Box>
        <Grid container>
            <Grid item xs={6}>
                <BackButton handleClick={props.back}></BackButton>
            </Grid>
            <Grid item xs={6}>
                {correct &&
                    <NextButton handleClick={props.next}></NextButton>
                }
            </Grid>
        </Grid>
        </>
    );
}

Protocol.propTypes = {
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
};