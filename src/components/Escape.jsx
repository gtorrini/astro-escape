import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Step, Stepper, StepLabel } from '@mui/material';
import Intro from './Intro.jsx';
import Controls from './CommsPanel.jsx';

const astroEscapeTheme = createTheme({
    components: {
        MuiStepIcon: {
            styleOverrides: {
                text: {
                    fontFamily: 'Consolas',
                },
            },
        },
    },
})

const steps = ['Intro', 'Clue 1']

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    // const handleReset = () => {
    //   setActiveStep(0);
    // };

    const handleContent = () => {
        switch(activeStep) {
            case(0):
                return(
                    <Intro next={handleNext}></Intro>
                );
            case(1):
                return(
                    <Controls back={handleBack} next={handleNext}></Controls>
                );
        }
    };
  
    return (
        <>
            <Box sx={{ mx: 2, my: 2}}>
                <ThemeProvider theme={astroEscapeTheme}>
                    <Stepper activeStep={activeStep}>
                        <Step key={steps[0]}>
                            <StepLabel>{steps[0]}</StepLabel>
                        </Step>
                            <Step key={steps[1]}>
                            <StepLabel>{steps[1]}</StepLabel>
                        </Step>
                    </Stepper>
                    {handleContent()}
                </ThemeProvider>
            </Box>
        </>
    );
  }
