// 3rd-party imports
import { memo, React, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { blue, grey, lightGreen, orange, red, yellow } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import TextField from '@mui/material/TextField';

// Local imports
import { BackButton, NextButton, RestartButton } from './NavButtons.jsx';
import { ViewportContext } from './useViewport.js';

// Set up colors & theme
const screen = grey[900];
const frame = grey[400];
const panelColors = createTheme({
  palette: {
    blue: {
      main: blue[500],
      border: blue[800]
    },
    green: {
      main: lightGreen[500],
      border: lightGreen[800]
    },
    orange: {
      main: orange[500],
      border: orange[800]
    },
    red: {
      main: red[500],
      border: red[800]
    },
    yellow: {
      main: yellow[600],
      border: yellow[800],
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        blue: {
          '&:hover, &:disabled': {
            backgroundColor: blue[300],
          },
        },
        green: {
          '&:hover, &:disabled': {
            backgroundColor: lightGreen[300],
          },
        },
        orange: {
          '&:hover, &:disabled': {
            backgroundColor: orange[300],
          },
        },
        red: {
          '&:hover, &:disabled': {
            backgroundColor: red[300],
          },
        },
        yellow: {
          '&:hover, &:disabled': {
            backgroundColor: yellow[300],
          },
        },
      },
    },
  }
});

// Screen displaying which subsystem is enabled
const ControlScreen = memo(
  function ControlScreen(props) {

    return (
      <Box 
        sx={{
          backgroundColor: screen,
          border: (props.width <= 650) ? 10 : 20,
          borderColor: frame,
          maxWidth: (props.width <= 650) ? '95%' : '60%',
          mb: 3,
          mx: 'auto',
          padding: 2,
          textAlign: 'center',
        }}
      >
        <p className="screen">{props.display}</p>
      </Box>
    );
  }
);

ControlScreen.propTypes = {
  display: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

// Control panel of buttons
function ControlPanel(props) {
  return (
    <Box
      sx={{
        backgroundColor: frame,
        borderRadius: '20px',
        mx: 'auto',
        mb: 3,
        maxWidth: (props.width <= 480) ? 336 : 392
      }}
    >
      <ThemeProvider theme={panelColors}>
        <Fab 
          aria-label="electrical power"
          color='yellow'
          disabled={props.send}
          onClick={() => {props.handleActivate(false, 'ELECTRICAL POWER SUBSYSTEM')}}
          size={(props.width <= 480) ? 'medium' : 'large'}
          sx={{ 
            border: '4px solid', 
            borderColor: 'yellow.border', 
            mx: (props.width <= 480) ? 0.5 : 1, 
            my: 2
          }}
        >
          <ElectricBoltIcon/>
        </Fab>
        <Fab
          aria-label="propulsion"
          color='red'
          disabled={props.send}
          onClick={() => {props.handleActivate(false, 'PROPULSION SUBSYSTEM')}}
          size={(props.width <= 480) ? 'medium' : 'large'}
          sx={{
            border: '4px solid',
            borderColor: 'red.border',
            mx: (props.width <= 480) ? 0.5 : 1,
            my: 2
          }}
        >
          <RocketLaunchIcon/>
        </Fab>
        <Fab
          aria-label="attitude and orbit control"
          color='blue'
          disabled={props.send}
          onClick={() => {props.handleActivate(false, 'ATTITUDE & ORBIT CONTROL SUBSYSTEM')}}
          size={(props.width <= 480) ? 'medium' : 'large'}
          sx={{
            border: '4px solid',
            borderColor: 'blue.border',
            mx: (props.width <= 480) ? 0.5 : 1,
            my: 2
          }}
        >
          <SwitchAccessShortcutIcon/>
        </Fab>
        <Fab
          aria-label="communications and data handling"
          color='orange'
          disabled={props.send}
          onClick={() => {props.handleActivate(true, 'COMMUNICATIONS & DATA HANDLING SUBSYSTEM')}}
          size={(props.width <= 480) ? 'medium' : 'large'}
          sx={{
            border: '4px solid',
            borderColor: 'orange.border', 
            mx: (props.width <= 480) ? 0.5 : 1,
            my: 2
          }}
        >
          <SsidChartIcon/>
        </Fab>
        <Fab
          aria-label="environmental control and life support"
          color='green'
          disabled={props.send}
          onClick={() => {
            props.handleActivate(false, 'ENVIRONMENTAL CONTROL & LIFE SUPPORT SUBSYSTEM')
          }}
          size={(props.width <= 480) ? 'medium' : 'large'}
          sx={{
            border: '4px solid',
            borderColor: 'green.border',
            mx: (props.width <= 480) ? 0.5 : 1,
            my: 2
          }}
        >
          <SensorOccupiedIcon/>
        </Fab>
      </ThemeProvider>
    </Box>
  );
}

ControlPanel.propTypes = {
  handleActivate: PropTypes.func.isRequired,
  send: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired
};

// Component to activate comms & send distress signal
export default function Controls(props) {
  const [activated, setActivated] = useState(false);
  const [display, setDisplay] = useState('WELCOME');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState(0)
  const [send, setSend] = useState(false);

  const width = useContext(ViewportContext);

  const handleActivate = (isComms, message) => {
    setActivated(isComms);
    setDisplay(message);
  }

  const handleSubmit = (text) => {
    const count = attempts + 1;
    setAttempts(attempts + 1);
    if (text.toLowerCase() === 'sos') {
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
      <ControlScreen display={display} width={width} />
      <ControlPanel handleActivate={handleActivate} send={send} width={width} />
      <Box sx={{ mb: 5 }}>
        <TextField 
          error={error !== null}
          disabled={activated === false}
          id="distress-signal"
          label='Message'
          inputProps={{ maxLength: 25 }}
          helperText = {error}
          onChange={(e) => {
              setMessage(e.target.value)
              setError(null);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(message);
            }
          }}
          sx={{ mx: 1 }}
          size={(width <= 480) ? 'medium' : 'large'}
        />
        <Button 
            id="distress-submit"
            disabled={message === null || send}
            label="Submit"
            variant="contained"
            onClick={() => {handleSubmit(message)}}
            sx={{ mx: 1, mt: 1 }}
            size={(width <= 480) ? 'medium' : 'large'}
        >Submit</Button>
      </Box>
      <Grid container>
        <Grid item xs={4}>
          <BackButton handleClick={props.back}></BackButton>
        </Grid>
        <Grid item xs={4}>
          <RestartButton handleClick={props.restart}></RestartButton>
        </Grid>
        <Grid item xs={4}>
          <NextButton disabled={send===false} handleClick={props.next}></NextButton>
        </Grid>
      </Grid>
    </>
  )
}

Controls.propTypes = {
  back: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired, 
  restart: PropTypes.func.isRequired
};
