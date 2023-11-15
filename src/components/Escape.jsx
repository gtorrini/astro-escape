// 3rd-party imports 
import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

// Local imports
import PuzzleIntros from './PuzzleIntros.jsx';
import ImageHunt from './ImageHunt.jsx';
import Protocol from './Protocol.jsx';
import Controls from './Controls.jsx';
import Cipher from './Cipher.jsx';
import Rebus from './Rebus.jsx';
import Outro from './Outro.jsx';

const titleCards = {
  1: {
    title: 'Puzzle #1',
    blurb: 'You want to look up the protocol for flying near black holes, but you misplaced your instruction manual. Search through your personal items below to find it.',
  }, 
  2: {
    title: 'Puzzle #2',
    blurb: 'Read the instructions in the mission manual. Use your discretion and reports from the monitoring panel to determine the best protocol.',
  },
  3: {
    title: 'Puzzle #3',
    blurb: 'You need to send a distress signal, but in your panic, you spilled coffee all over the schematics in your manual. Use the control panel below to activate the correct subsystem.',
  },
  4: {
    title: 'Puzzle #4',
    blurb: 'You received a response, but it seems to be encoded. Decode the response using the cipher below.',
  },
  5: {
    title: 'Puzzle #5',
    blurb: 'An alien ship has offered you aid, but they do not know if they can trust you to fly responsibly throughout the cosmos. Solve the rebus puzzles below to prove you are ultimately worthy of their compassion.',
  },
}

// Component to hold escape room puzzles
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
                    <>
                      <PuzzleIntros title={titleCards[1].title} blurb={titleCards[1].blurb}/>
                      <ImageHunt next={handleNext}/>
                    </>
                );
            case(1):
                return(
                    <>
                      <PuzzleIntros title={titleCards[2].title} blurb={titleCards[2].blurb}/>
                      <Protocol back={handleBack} next={handleNext} restart={handleRestart}/>
                    </>
                );
            case(2):
                return(
                    <>
                      <PuzzleIntros title={titleCards[3].title} blurb={titleCards[3].blurb}/>
                      <Controls back={handleBack} next={handleNext} restart={handleRestart}/>
                    </>
                );
            case(3):
                return(
                    <>
                      <PuzzleIntros title={titleCards[4].title} blurb={titleCards[4].blurb}/>
                      <Cipher back={handleBack} next={handleNext} restart={handleRestart}/>
                    </>
                );
            case(4):
                return(
                    <>
                      <PuzzleIntros title={titleCards[5].title} blurb={titleCards[5].blurb}/>
                      <Rebus back={handleBack} next={handleNext} restart={handleRestart}/>
                    </>
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