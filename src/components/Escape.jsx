import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Step, Stepper, StepLabel } from '@mui/material';
import Intro from './Intro.jsx';
import ImageHunt from './ImageHunt.jsx';
import Controls from './CommsPanel.jsx';
import Signal from './DistressSignal.jsx';
import Cipher from './CaesarCipher.jsx';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const steps = ['Intro', 'Clue 1', 'Clue 2', 'Clue 3', 'Clue 4']

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
                    <ImageHunt back={handleBack} next={handleNext}></ImageHunt>
                );
            case(2):
                return(
                    <Controls back={handleBack} next={handleNext}></Controls>
                );
            case(3):
                return(
                    <Signal back={handleBack} next={handleNext}></Signal>
                )
            case(4):
                return(
                    <Cipher back={handleBack} next={handleNext}></Cipher>
                )
        }
    };
  
    return (
        <>
            <Box sx={{ mx: 2, my: 2}}>
                <ThemeProvider theme={darkTheme}>
                    <Stepper activeStep={activeStep}>
                        <Step key={steps[0]}>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step key={steps[1]}>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step key={steps[2]}>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step key={steps[3]}>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step key={steps[4]}>
                            <StepLabel></StepLabel>
                        </Step>
                    </Stepper>
                    {handleContent()}
                </ThemeProvider>
            </Box>
        </>
    );
  }
