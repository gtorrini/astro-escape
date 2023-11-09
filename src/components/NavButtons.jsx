import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


function BackButton(props) {
    return (
        <>
            <Button
                aria-label="Previous puzzle"
                onClick={() => props.handleClick()}
                onKeyDown={() => props.handleClick()}
                variant='contained'
            >
                <ArrowBackIcon></ArrowBackIcon>
            </Button>
        </>
    );
}

BackButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

function NextButton(props) {
    return (
        <>
            <Button
                aria-label="Next puzzle"
                disabled={props.disabled}
                onClick={() => props.handleClick()}
                onKeyDown={() => props.handleClick()}
                variant='contained'
            >
                <ArrowForwardIcon></ArrowForwardIcon>
            </Button>
        </>
    );
}

NextButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

function RestartButton(props) {
    return (
        <>
            <Button
                aria-label="Restart game"
                onClick={() => props.handleClick()}
                onKeyDown={() => props.handleClick()}
                variant='contained'
            >
                <RestartAltIcon></RestartAltIcon>
            </Button>
        </>
    );
}

RestartButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export { BackButton, NextButton, RestartButton };
