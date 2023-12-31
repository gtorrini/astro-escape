// 3rd-party imports
import { memo, React, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClearIcon from '@mui/icons-material/Clear';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import IconButton from '@mui/material/IconButton';
import { red, orange, yellow, lightGreen, grey, blue, indigo, purple } from '@mui/material/colors';

// Local imports
import { BackButton, NextButton, RestartButton } from './NavButtons.jsx';
import { ViewportContext } from './useViewport.js';

// Set up colors & theme
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
      main: yellow[600]
    },
    green: {
      main: lightGreen[500]
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
  components: {
    MuiButtonGroup: {
      styleOverrides: {
        firstButton: {
          border: '6px solid',
          borderColor: red[800],
          marginRight: '1px',
          '&:hover, &:disabled': {
            backgroundColor: red[300],
            borderRight: '6px solid ' + red[800]
          },
        },
        middleButton: {
          borderRight: '6px solid',
          marginRight: '1px',
          '&.MuiButton-containedOrange': {
            borderColor: orange[800],
            '&:hover, &:disabled': {
              backgroundColor: orange[300],
              borderRight: '6px solid ' + orange[800]
            }, 
          },
          '&.MuiButton-containedYellow': {
            borderColor: yellow[800],
            '&:hover, &:disabled': {
              backgroundColor: yellow[300],
              borderRight: '6px solid ' + yellow[800]
            }, 
          },
          '&.MuiButton-containedGreen': {
            borderColor: lightGreen[800],
            '&:hover, &:disabled': {
              backgroundColor: lightGreen[300],
              borderRight: '6px solid ' + lightGreen[800]
            }, 
          },
          '&.MuiButton-containedBlue': {
            borderColor: blue[800],
            '&:hover, &:disabled': {
              backgroundColor: blue[300],
              borderRight: '6px solid ' + blue[800]
            }, 
          },
          '&.MuiButton-containedIndigo': {
            borderColor: indigo[800],
            '&:hover, &:disabled': {
              backgroundColor: indigo[300],
              borderRight: '6px solid ' + indigo[800]
            }, 
          }
        },
        lastButton: {
          borderColor: purple[800],
          '&:hover, &:disabled': {
            backgroundColor: purple[300],
          }, 
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: '6px solid',
        },
      },
    },
  },
});

// Increase icon button visibility when disabled
const ModifiedIcons = styled(IconButton) (() => ({
  marginLeft: 1,
  display: 'inline-block',
  color: screen,
  '&.Mui-disabled': {
      color: '#616161',
  },
}));

// Screen displaying encoded message, cipher key, & command sequence
const CipherKey = memo(
  function CipherKey(props) {
    return (
      <Box 
        sx={{
          backgroundColor: screen,
          border: (props.width <= 650) ? 10 : 20,
          borderColor: frame,
          maxWidth: 500,
          mx: 'auto',
          mb: 3,
          padding: 1,
          textAlign: (props.width <= 480) ? 'left' : 'center'
        }}
      >
        <p className="screen"> MSHZO NYVVCF JVSVYZ AV HJJLWA VBY HPK <br/>- HSPLUZ </p>
        <div style={{ overflow: 'auto' }}>
          <table className="screen">
            <tbody>
              {(props.width > 550) && 
                <>
                  <tr>
                    <th scope="row">PLAIN</th>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                    <td>E</td>
                    <td>F</td>
                    <td>G</td>
                    <td>H</td>
                    <td>I</td>
                    <td>J</td>
                    <td>K</td>
                    <td>L</td>
                    <td>M</td>
                    <td>N</td>
                    <td>O</td>
                    <td>P</td>
                    <td>Q</td>
                    <td>R</td>
                    <td>S</td>
                    <td>T</td>
                    <td>U</td>
                    <td>V</td>
                    <td>W</td>
                    <td>X</td>
                    <td>Y</td>
                    <td>Z</td>
                  </tr>
                  <tr>
                    <th scope="row">CIPHER</th>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td>M</td>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td>U</td>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td>B</td>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                  </tr>
                </>
              }
              {(props.width <= 550) &&
                <>
                  <tr>
                    <th scope="row">PLAIN</th>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                    <td>E</td>
                    <td>F</td>
                    <td>G</td>
                    <td>H</td>
                    <td>I</td>
                    <td>J</td>
                    <td>K</td>
                    <td>L</td>
                    <td>M</td>
                  </tr>
                  <tr>
                    <th scope="row">CIPHER</th>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td>M</td>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                  </tr>
                  <tr>
                    <th scope="row">PLAIN</th>
                    <td>N</td>
                    <td>O</td>
                    <td>P</td>
                    <td>Q</td>
                    <td>R</td>
                    <td>S</td>
                    <td>T</td>
                    <td>U</td>
                    <td>V</td>
                    <td>W</td>
                    <td>X</td>
                    <td>Y</td>
                    <td>Z</td>
                  </tr>
                  <tr>
                    <th scope="row"> CIPHER </th>
                    <td>U</td>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td>B</td>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                  </tr>
                </>
              }
            </tbody>
          </table>
        </div>
        <p className="screen"> &gt;&gt;&gt; {props.display}</p>
      </Box>
    );
  }
);

CipherKey.propTypes = {
  display: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
}

// Component to decode cipher & send correct sequence
export default function Cipher(props) {
  const [decoded, setDecoded] = useState(false);
  const [display, setDisplay] = useState('INPUT COMMAND SEQUENCE');

  const width = useContext(ViewportContext);

  const validateResponse = (message) => {
    if (message === 'GROOVY') {
      setDecoded(true);
    } else {
      setDecoded(false);
    }
  }

  const handleKey = (message, letter) => {
    if (message.length < 25) {
      const nextMessage = message.concat(letter);
      setDisplay(nextMessage);
      validateResponse(nextMessage);
    } 
  }

  const handleBackspace = (message) => {
    if (message.length === 1) {
      setDisplay('');
    } else {
      const nextMessage = message.slice(0, -1);
      setDisplay(nextMessage);
      validateResponse(nextMessage);
    }
  }

  const handleClear = () => {
    setDisplay('');
  }

  const handleHint = () => {
    setDisplay('Hint: ROY G. BIV');
  }

  return (
    <>
      <CipherKey display={display} width={width} />
      <Box
        sx={{
          backgroundColor: frame,
          borderRadius: '10px',
          maxWidth: (width <= 415) ? 205 : 384,
          mx: 'auto',
          mb: 5
        }}
      >
        <ThemeProvider theme={rainbow}>
            <ButtonGroup 
              aria-label="Color buttons"
              disabled={decoded}
              sx={{ display: "block", padding: (width > 480) ? 2 : 1 }}
              variant='contained'
            >
              <Button 
                aria-label="Red"
                color='red'
                onClick={() => handleKey(display, 'R')} 
                sx={{
                  height: (width > 480) ? 48 : 32,
                  width: (width > 480) ? 48 : 32
                }}
                title="Red"
              ></Button>
              <Button
                aria-label="Orange"
                color='orange'
                onClick={() => handleKey(display, 'O')}
                sx={{
                  height: (width > 480) ? 48 : 32,
                  width: (width > 480) ? 48 : 32
                }}
                title="Orange"
              ></Button>
              <Button
                aria-label="Yellow"
                color='yellow'
                onClick={() => handleKey(display, 'Y')}
                sx={{
                  height: (width > 480) ? 48 : 32,
                  width: (width > 480) ? 48 : 32
                }}
                title="Yellow"
              ></Button>
              <Button
                aria-label="Green"
                color='green'
                onClick={() => handleKey(display, 'G')}
                sx={{
                  height: (width > 480) ? 48 : 32,
                  width: (width > 480) ? 48 : 32
                }}
                title="Green"
              ></Button>
              <Button
                aria-label="Blue"
                color='blue'
                onClick={() => handleKey(display, 'B')}
                sx={{
                  height: (width > 480) ? 48 : 32,
                  width: (width > 480) ? 48 : 32
                }}
                title="Blue"
              ></Button>
              <Button
                aria-label="Indigo"
                color='indigo'
                onClick={() => handleKey(display, 'I')}
                sx={{
                  height: (width > 480) ? 48 : 32,
                  width: (width > 480) ? 48 : 32
                }}
                title="Indigo"
              ></Button>
              <Button
                aria-label="Violet"
                color='violet'
                onClick={() => handleKey(display, 'V')}
                sx={{
                  height: (width > 480) ? 48 : 32,
                  width: (width > 480) ? 48 : 32
                }}
                title="Violet"
              ></Button>
          </ButtonGroup>
        </ThemeProvider>
        <ModifiedIcons
          aria-label="Backspace command sequence"
          disabled={display.length === 0 || decoded}
          onClick={() => handleBackspace(display)}
          title="Backspace"
        >
          <BackspaceIcon fontSize="medium"></BackspaceIcon>
        </ModifiedIcons>
        <ModifiedIcons 
          aria-label="Clear command sequence"
          disabled={display.length === 0 || decoded}
          onClick={() => handleClear()}
          title="Clear"
        >
          <ClearIcon fontSize="large"></ClearIcon>
        </ModifiedIcons>
        <ModifiedIcons
          aria-label="Get help with this puzzle"
          disabled={decoded}
          onClick={() => handleHint()}
          title="Hint"
        >
          <HelpCenterIcon fontSize="medium"></HelpCenterIcon>
        </ModifiedIcons>
      </Box>
      <Grid container>
        <Grid item xs={4}>
          <BackButton handleClick={props.back}></BackButton>
        </Grid>
        <Grid item xs={4}>
          <RestartButton handleClick={props.restart}></RestartButton>
        </Grid>
        <Grid item xs={4}>
          <NextButton disabled={decoded===false} handleClick={props.next}></NextButton>
        </Grid>
      </Grid>
    </>
  )
}

Cipher.propTypes = {
  back: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired
}