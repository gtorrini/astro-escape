// 3rd-party imports 
import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

// Local imports
import ImageHunt from './ImageHunt.jsx';
import Protocol from './Protocol.jsx';
import Controls from './Controls.jsx';
import Cipher from './Cipher.jsx';
import Rebus from './Rebus.jsx';
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
                    <ImageHunt next={handleNext}/>
                );
            case(1):
                return(
                    <Protocol back={handleBack} next={handleNext} restart={handleRestart}/>
                );
            case(2):
                return(
                    <Controls back={handleBack} next={handleNext} restart={handleRestart}/>
                );
            case(3):
                return(
                    <Cipher back={handleBack} next={handleNext} restart={handleRestart}/>
                );
            case(4):
                return(
                    <Rebus back={handleBack} next={handleNext} restart={handleRestart}/>
                );
            case(5):
                return(
                    <Outro/>
                );
        }
    };
  
    return (
        <>
            <Box sx={{ mx: 2, my: 2}}>
                <Stepper activeStep={activeStep}>
                    <Step key="puzzle-1">
                        <StepLabel/>
                    </Step>
                    <Step key="puzzle-2">
                      <StepLabel/>
                    </Step>
                    <Step key="puzzle-3">
                      <StepLabel/>
                    </Step>
                    <Step key="puzzle-4">
                    <StepLabel/>
                    </Step>
                    <Step key="puzzle-5">
                      <StepLabel/>
                    </Step>
                </Stepper>
                {handleContent()}
            </Box>
        </>
    );
}
