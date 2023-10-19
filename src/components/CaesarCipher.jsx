import { React } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, orange, yellow, green, blue, indigo, purple } from '@mui/material/colors';

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

export default function Clue2() {
    // const [decoded, setDecoded] = useState(false);
    
    return (
        <>
            <h3>Success! ...or is it?</h3>
            <h4>You received a message, but it seems to be encoded. Decode it and send the appropriate response.</h4>

            <ThemeProvider theme={rainbow}>
                <ButtonGroup variant="contained" aria-label="color buttons">
                    <Button color="red">Red</Button>
                    <Button color="orange">Orange</Button>
                    <Button color="yellow">Yellow</Button>
                    <Button color="green">Green</Button>
                    <Button color="blue">Blue</Button>
                    <Button color="indigo">Indigo</Button>
                    <Button color="violet">Violet</Button>
                </ButtonGroup>
            </ThemeProvider>
        </>
    )

    
}