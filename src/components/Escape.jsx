import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Button, Grid, Step, Stepper, StepLabel } from '@mui/material';
import { BackButton, NextButton } from './NavButtons.jsx';
import Intro from './Intro.jsx';
// import Clue1 from './CommsPanel.jsx';
// import Clue2 from './CaesarCipher.jsx';

const steps = ['Intro']

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    const handleNav = () => {
        switch(activeStep) {
            case (0):
                return (
                    <Grid item xs={12}>
                        <NextButton handleClick={handleNext}></NextButton>
                    </Grid>
                )
            case (steps.length):
                return (
                    <>
                        <Grid item xs={12}>
                            <Button handleClick={handleReset}></Button>
                        </Grid>
                    </>
                )
            default:
                return (
                    <>
                        <Grid item xs={6}>
                            <BackButton handleClick={handleBack}></BackButton>
                        </Grid>
                        <Grid item xs={6}>
                            <NextButton handleClick={handleNext}></NextButton>
                        </Grid>
                    </>
                )
        }
    }

    const handleContent = () => {
        switch(activeStep) {
            case(0):
                return(
                    <Intro></Intro>
                )
            // case(1):
            //     return(
            //         <Clue1></Clue1>
            //     )
            // case(2):
            //     return(
            //         <Clue2></Clue2>
            //     )
        }
    }
  
    return (
        <>
            <Box sx={{ mx: 2, my: 2}}>
                <Stepper activeStep={activeStep}>
                    <Step key={steps[0]}>
                        <StepLabel>{steps[0]}</StepLabel>
                    </Step>
                    {/* <Step key={steps[1]}>
                        <StepLabel>{steps[1]}</StepLabel>
                    </Step>
                    <Step key={steps[2]}>
                        <StepLabel>{steps[2]}</StepLabel>
                    </Step> */}
                </Stepper>
                {handleContent()}
                <Grid container>
                    {handleNav()}
                </Grid>
            </Box>
        </>
    );
  }
