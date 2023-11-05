import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


function BackButton(props) {
    const handleClick = () => {
        props.handleClick();
    }

    return (
        <>
            <Button
                aria-label='back'
                onClick={handleClick}
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
    const handleClick = () => {
        props.handleClick();
    }

    return (
        <>
            <Button
                aria-label='next'
                onClick={handleClick}
                variant='contained'
            >
                <ArrowForwardIcon></ArrowForwardIcon>
            </Button>
        </>
    );
}

NextButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

function RestartButton(props) {
    const handleClick = () => {
        props.handleClick();
    }

    return (
        <>
            <Button
                aria-label='restart'
                onClick={handleClick}
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
