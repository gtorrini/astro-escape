import { React, useState } from 'react';
import { Box, Step, Stepper, StepLabel } from '@mui/material';
import ImageHunt from './ImageHunt.jsx';
import Protocol from './Protocol.jsx';
import Controls from './Controls.jsx';
import Cipher from './Cipher.jsx';
import Puzzles from './RebusPuzzle.jsx';
import Outro from './Outro.jsx';

export default function Escape() {
    const [activeStep, setActiveStep] = useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleRestart = () => {
      setActiveStep(0);
    };

    const handleContent = () => {
        switch(activeStep) {
            case(0): 
                return(
                    <ImageHunt next={handleNext}></ImageHunt>
                );
            case(1):
                return(
                    <Protocol back={handleBack} next={handleNext} restart={handleRestart}></Protocol>
                );
            case(2):
                return(
                    <Controls back={handleBack} next={handleNext} restart={handleRestart}></Controls>
                );
            case(3):
                return(
                    <Cipher back={handleBack} next={handleNext} restart={handleRestart}></Cipher>
                );
            case(4):
                return(
                    <Puzzles back={handleBack} next={handleNext} restart={handleRestart}></Puzzles>
                );
            case(5):
                return(
                    <Outro></Outro>
                );
        }
    };
  
    return (
        <>
            <Box sx={{ mx: 2, my: 2}}>
                <Stepper activeStep={activeStep}>
                    <Step key="puzzle-1">
                        <StepLabel></StepLabel>
                    </Step>
                    <Step key="puzzle-2">
                        <StepLabel></StepLabel>
                    </Step>
                    <Step key="puzzle-3">
                        <StepLabel></StepLabel>
                    </Step>
                    <Step key="puzzle-4">
                        <StepLabel></StepLabel>
                    </Step>
                    <Step key="puzzle-5">
                        <StepLabel></StepLabel>
                    </Step>
                </Stepper>
                {handleContent()}
            </Box>
        </>
    );
}
