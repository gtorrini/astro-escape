import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Fab, Grid } from '@mui/material'; 
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { BackButton, NextButton } from './NavButtons.jsx';

export default function Controls(props) {
    const [activated, setActivated] = useState(false);
    const [display, setDisplay] = useState('Welcome');

    const handleClick = (isComms, message) => {
        setActivated(isComms);
        setDisplay(message);
    }

    return (
        <>
            <h4>How Does This Thing Work?</h4>
            <p>You need to send out a distress signal, but you misplaced your user manual. Play around with the controls to activate the communications panel.</p>
            <Box>
                <p>{display}</p>
            </Box>
            <Fab>
                <ElectricBoltIcon
                    onClick={() => {handleClick(false, 'Electrical Power Subsystem')}}
                >
                </ElectricBoltIcon>
            </Fab>
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