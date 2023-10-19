import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NextButton(props) {
    const handleClick = () => {
        props.handleClick();
    }

    return (
        <>
            <Button
                className='next'
                variant='contained'
                onClick={handleClick}
            >
                <ArrowForwardIcon></ArrowForwardIcon>
            </Button>
        </>
    );
}

NextButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

function BackButton(props) {
    const handleClick = () => {
        props.handleClick();
    }

    return (
        <>
            <Button
                className='back'
                variant='contained'
                onClick={handleClick}
            >
                <ArrowBackIcon></ArrowBackIcon>
            </Button>
        </>
    );
}

BackButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export { NextButton, BackButton };
