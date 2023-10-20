import { React } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import { NextButton } from './NavButtons.jsx';

export default function Intro(props) {
    return (
        <>
            <Box sx={{my: 5}}>
                <Typography variant="h4">
                    Welcome to Astro Escape
                </Typography>
                <Typography variant="subtitle1" sx={{mb: 3}}>
                    An Astronomy-Themed Online Escape Room
                </Typography>
                <Typography variant="body1">
                    Your spaceship has just entered the sphere of influence of a black hole. Can you escape?
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={12}>
                    <NextButton handleClick={props.next}></NextButton>
                </Grid>
            </Grid>
        </>
    );
}

Intro.propTypes = {
    next: PropTypes.func.isRequired
};