import { React, useState } from 'react';
import { Box, Step, Stepper, StepLabel } from '@mui/material';
import ImageHunt from './ImageHunt.jsx';
import Protocol from './ProtocolEval.jsx';
import Controls from './CommsPanel.jsx';
import Signal from './DistressSignal.jsx';
import Cipher from './CaesarCipher.jsx';


export default function Escape() {
    const [activeStep, setActiveStep] = useState(0);
  
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
                    <ImageHunt next={handleNext}></ImageHunt>
                );
            case(1):
                return(
                    <Protocol back={handleBack} next={handleNext}></Protocol>
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