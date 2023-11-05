import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ButtonGroup, Grid, IconButton, Typography } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ClearIcon from '@mui/icons-material/Clear';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { red, orange, yellow, green, grey, blue, indigo, purple } from '@mui/material/colors';
import { BackButton, NextButton, RestartButton } from './NavButtons.jsx';

/* Set up screen colors */
const screen = grey[900];
const frame = grey[400];

/* Set up button colors */
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
    components: {
        // Name of the component
        MuiButtonGroup: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    borderColor: frame,
                },
                firstButton: {
                    borderColor: frame,
                },
                middleButton: {
                    borderColor: frame,
                }
            },
        },
    },
});

const ModifiedIcons = styled(IconButton) (() => ({
    marginLeft: 1,
    display: 'inline-block',
    color: screen,
    '&.Mui-disabled': {
        color: '#616161',
    },
}));

const cipherKey = () => {
    return (
        <table className="screen cipher">
            <tr>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>M</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>U</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>B</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    );
}

export default function Cipher(props) {
    const [decoded, setDecoded] = useState(false);
    const [display, setDisplay] = useState('SEND RESPONSE');

    const validateResponse = (message) => {
        if (message === 'GROOVY') {
            setDecoded(true);
        } else {
            setDecoded(false);
        }
    }

    const handleKey = (message, letter) => {
        if (message.length < 20) {
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

    return (
        <>
            <Box sx={{my: 5}}>
                <Typography variant="h5" gutterBottom>
                    Challenge #4
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
                    mb: 3,
                    textAlign: 'center',
                    width: '60%'
                }}
            >
                <p className='screen'> 	MSHZO NYVVCF JVSVYZ AV HJJLWA VBY HPK  </p>
                {cipherKey()}
                <p className='screen'> &gt;&gt;&gt;  {display}</p>
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
                    <ButtonGroup variant="contained" aria-label="color buttons" sx={{my: 2, display: "inline-block"}}>
                        <Button 
                            color="red" 
                            onClick={() => handleKey(display, 'R')} 
                            sx={{height: 40, width: 80}}
                        ></Button>
                        <Button
                            color="orange"
                            onClick={() => handleKey(display, 'O')}
                            sx={{height: 40, width: 80}}
                        ></Button>
                        <Button
                            color="yellow"
                            onClick={() => handleKey(display, 'Y')}
                            sx={{height: 40, width: 80}}
                        ></Button>
                        <Button
                            color="green"
                            onClick={() => handleKey(display, 'G')}
                            sx={{height: 40, width: 80}}
                        ></Button>
                        <Button
                            color="blue"
                            onClick={() => handleKey(display, 'B')}
                            sx={{height: 40, width: 80}}
                        ></Button>
                        <Button
                            color="indigo"
                            onClick={() => handleKey(display, 'I')}
                            sx={{height: 40, width: 80}}
                        ></Button>
                        <Button
                            color="violet"
                            onClick={() => handleKey(display, 'V')}
                            sx={{height: 40, width: 80}}
                        ></Button>
                    </ButtonGroup>
                </ThemeProvider>
                <ModifiedIcons
                    aria-label="backspace"
                    disabled={display.length === 0}
                    onClick={() => handleBackspace(display)}

                >
                    <BackspaceIcon fontSize="medium"></BackspaceIcon>
                </ModifiedIcons>
                <ModifiedIcons 
                    aria-label="clear"
                    disabled={display.length === 0}
                    onClick={() => handleClear()}

                >
                    <ClearIcon fontSize="large"></ClearIcon>
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