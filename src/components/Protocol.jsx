// 3rd-party imports
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { grey, yellow } from '@mui/material/colors';

// Local imports
import { BackButton, NextButton, RestartButton } from './NavButtons.jsx';

const page = yellow[50];
const screen = grey[900];
const frame = grey[400];

// Instructions for black hole navigation
function Instructions() {
  return (
    <Box
    sx={{
      backgroundColor: page,
      maxWidth: (window.innerWidth <= 650) ? '100%' : '80%',
      mb: 3,
      mx: 'auto',
      padding: 2,
      textAlign: 'left',
    }}
  >
      <p className="page">Black holes are not galactic vacuum cleaners; they will not indiscriminately consume everything in their path. Missions can fly calmly around both stellar-mass and supermassive black holes, as long as they keep a safe distance. Keep in mind that the bigger the black hole (and the closer you are to it), the faster the velocity required to escape.</p>
  </Box>
  );
}

// Monitoring panel with science insights
function MonitoringPanel() {
  return (
    <Box 
      sx={{
        backgroundColor: screen,
        border: (window.innerWidth <= 650) ? 10 : 20,
        borderColor: frame,
        maxWidth: (window.innerWidth <= 650) ? '100%' : '75%',
        mb: 3,
        mx: 'auto',
        padding: 2,
        textAlign: 'left',
      }}
    >
      <p className="screen"> <b>INSIGHTS</b> <br/> The black hole is 6 million times the mass of the Sun, making it <em>supermassive</em>. </p>
      <p className="screen"> <b>LOCATION</b> <br/> You are outside of the black hole&#39;s event horizon, or &#34;point of no return&#34; inside which not even light can escape. However, you are inside the influence radius, a region where the black hole&#39;s gravity dominates that of nearby stars.</p>
      <p className="screen"> <b>FUELING</b> <br/> The primary fuel tank is at 17% capacity, and only one of your reserve tanks is remaining.</p>
    </Box>
  );
}

// Choices for black hole navigation
function Choices(props) {
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
      <Box sx={{ mb: 5, mx: 'auto', width: '80%' }}>
        <FormControl sx={{ mb: 3 }}>
          <RadioGroup
            value={choice}
            onChange={(e) => {
              setMessage;
              handleChoice(e);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setMessage;
                handleChoice(e);
              } else if (e.key === 'Escape') {
                setMessage(null);
                setChoice(null);
              }
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
        {message !== null && (
          <Fade in={correct === false} timeout={7500} unmountOnExit={true}>
            <Typography variant='body2'>{message}</Typography>
          </Fade>
        )}
      </Box>
      <Grid container>
        <Grid item xs={4}>
          <BackButton handleClick={props.back}></BackButton>
        </Grid>
        <Grid item xs={4}>
          <RestartButton handleClick={props.restart}></RestartButton>
        </Grid>
        <Grid item xs={4}>
          <NextButton disabled={correct===false} handleClick={props.next}></NextButton>
        </Grid>
      </Grid>
    </>
  );
}

Choices.propTypes = {
  back: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired
};

// Component to select a navigation protocol
export default function Protocol(props) {
  return (
    <>
      <Instructions/>
      <MonitoringPanel/>
      <Choices back={props.back} next={props.next} restart={props.restart} />
    </>
  );
}

Protocol.propTypes = {
  back: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired
};
