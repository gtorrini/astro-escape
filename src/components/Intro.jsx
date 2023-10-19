import { React } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { NextButton } from './NavButtons.jsx';

export default function Intro(props) {
    return (
        <>
            <h3>Welcome to Astro Escape!</h3>
            <p>Your spaceship has just entered the sphere of influence of a black hole. Can you escape? </p>
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