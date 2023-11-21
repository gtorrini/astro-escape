// 3rd-party imports
import { React, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Local imports
import { BackButton, RestartButton } from './NavButtons.jsx';
import { ViewportContext } from './useViewport.js';

// Display & solve a rebus puzzle
function Puzzle(props) {
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [explain, setExplain] = useState(false);

  const handleSubmit = (text) => {
    if (text.toLowerCase().includes(props.includes)) {
      setError(null);
      setExplain(true);
      props.handleSolved();
    } else {
      setError(props.hint);
    }
  }

  return (
    <>
      <Box sx={{ mb: (props.id === '1') ? 10 : 5 }} >
        <Typography variant={(props.width <= 480) ? 'h6' : 'h3'} sx={{padding: 2}}>
          {props.clue}
        </Typography>
        <Box sx={{ my: 3 }}>
          <TextField 
            error={error !== null}
            helperText={error}
            id={"rebus-" + props.id + "-answer"}
            label='Answer'
            inputProps={{ maxLength: 25 }}
            onChange={e => {
                setAnswer(e.target.value)
                setError(null);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(answer);
              }
            }}
            size={(props.width <= 480) ? 'small' : 'large'}
          />
          <Button 
            aria-label="submit"
            disabled={answer === null || explain}
            display={(window.innerWidth <= 480) ? 'block' : 'inline'}
            label='Submit'
            variant='contained'
            onClick={() => {handleSubmit(answer)}}
            sx={{ ml: ((props.width < 424) ? 0 : 2), mt: ((props.width <= 480) ? 0.5 : 1) }}
            size={(props.width <= 480) ? 'small' : 'large'}
          >
            Submit
          </Button>
        </Box>
        {explain && 
          <Box
              sx={{
                  backgroundColor: '#b71c1c',
                  borderRadius: 1,
                  maxWidth: (props.width <= 480) ? '100%' : '60%',
                  mb: 3,
                  mx: 'auto'
              }}
          >
              <Typography variant='body2' sx={{padding: 2, textAlign: 'justify'}}>
                  {props.explanation}
              </Typography>
          </Box>
        }
      </Box>
    </>
  );
}

Puzzle.propTypes = {
  includes: PropTypes.string.isRequired,
  clue: PropTypes.object.isRequired,
  hint: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  explanation: PropTypes.object.isRequired,
  handleSolved: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
};

// Component to hold multiple rebus puzzles
export default function Rebus(props) {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  const width = useContext(ViewportContext);

  const handleFirst = () => {
    setFirst(true);
  }

  const handleSecond = () => {
    setSecond(true);
  }

  const spaghetti = {
    includes: 'spaghettification',
    clue: <>&#127837; + FI + &#128049; + (&#129409; - L)</>,
    hint: 'Hint: SPAGHETTI + FI + CAT + (LION - L)',
    id: '1',
    explanation: <>
      The tidal forces near black holes are so intense that they can stretch out
      and flatten objects in a process called <b>spaghettification</b>. In fact, 
      tidal acceleration makes travelling around stellar-mass black holes more dangerous than
      supermassive black holes! Since the radius of the event horizon (or &#34;point of no return&#34;) increases with the mass of the black hole, the edge of a less massive black hole is
      actually closer to the infinitely dense region at its center.
    </>,
    handleSolved: handleFirst
  };

  const radiation = {
    includes: 'radiation',
    clue: <>(&#128251; [O&rarr;A]) + (&#128084; - E) + (&#127816; - MEL)</>,
    hint: 'Hint: (RADIO [O→A]) + (TIE - E) + (MELON - MEL)',
    id: '2', 
    explanation: <>
      When a black hole&#39;s gravity pulls in stars, gas, or dust, the material begins to 
      orbit in a rotating disk. As different streams of particles inside the disk move
      past each other, the friction between them produces heat and high-energy <b>radiation</b>. This includes the emission of powerful X-rays, which can damage your cells!
    </>,
    handleSolved: handleSecond
  }

  return (
    <>
      <Puzzle {...spaghetti} width={width} />
      <Puzzle {...radiation} width={width} />
      <Grid container>
        <Grid item xs={4}>
          <BackButton handleClick={props.back}></BackButton>
        </Grid>
        <Grid item xs={4}>
          <RestartButton handleClick={props.restart}></RestartButton>
        </Grid>
        <Grid item xs={4}>
          <Button
            disabled={(first===false) && (second===false)}
            variant='contained' 
            onClick={props.next}
          >
            Finish
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

Rebus.propTypes = {
  back: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired
}