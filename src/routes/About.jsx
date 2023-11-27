// 3rd-party imports
import { React } from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Local imports
import PuzzleIntros from '../components/PuzzleIntros.jsx';

function Networking() {
  return (
    <>
      <Button 
        href="https://gtorrini.github.io/"
        variant="contained"
        sx={{ mx: 1, mb: 1 }}
      >
        Visit Personal Site &nbsp;
        <LanguageIcon></LanguageIcon>
      </Button>
      <Button 
        href="https://github.com/gtorrini/portfolio"
        variant="contained"
        sx={{ mx: 1, mb: 1 }}
      >
        View Portfolio &nbsp;
        <GitHubIcon></GitHubIcon>
      </Button>
      <Button
        href="https://www.linkedin.com/in/gabriela-torrini-9a2ab7235" 
        variant="contained" 
        sx={{ mx: 1, mb: 1 }}
      >
        Connect with Me &nbsp;
        <LinkedInIcon></LinkedInIcon>
      </Button>
    </>
  );
}

export default function About() {
  const heading = 'ABOUT'
  const bio = "Astro Escape was developed by Gabriela Torrini, a software engineer and astronomer. She also designed the game's pixel art background.";

  return (
    <>
      <PuzzleIntros title={heading} blurb={bio}>
        <Networking/>
      </PuzzleIntros>
    </>
  );
}
