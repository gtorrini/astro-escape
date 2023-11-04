import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'; 
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


function BackButton(props) {
    const handleClick = () => {
        props.handleClick();
    }

    return (
        <>
            <IconButton
                aria-label='back'
                onClick={handleClick}
            >
                <ArrowBackIcon></ArrowBackIcon>
            </IconButton>
        </>
    );
}

BackButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

function FinishButton(props) {
    const handleClick = () => {
        props.handleClick();
    }

    return (
        <>
            <Button
                variant='contained'
                onClick={handleClick}
            >
                Finish
            </Button>
        </>
    )
}

FinishButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

function NextButton(props) {
    const handleClick = () => {
        props.handleClick();
    }

    return (
        <>
            <IconButton
                aria-label='next'
                onClick={handleClick}
            >
                <ArrowForwardIcon></ArrowForwardIcon>
            </IconButton>
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
            <IconButton
                aria-label='restart'
                onClick={handleClick}
            >
                <RestartAltIcon></RestartAltIcon>
            </IconButton>
        </>
    );
}

RestartButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export { BackButton, FinishButton, NextButton, RestartButton };
