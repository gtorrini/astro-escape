import { React } from 'react';
import { Box, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function About() {
    return (
        <>
            <Box sx={{my: 5}}>
                <Typography variant="h4">
                    ABOUT
                </Typography>
                <Typography variant="body1" sx={{my: 3, maxWidth: '60%', mx: 'auto'}}>
                    Astro Escape was developed by Gabriela Torrini, a software engineer and astronomer. She also designed the game&#39;s pixel art background. 
                </Typography>
                <Button 
                    href="https://gtorrini.github.io/"
                    variant="contained"
                    sx={{mx: 1}}
                >
                    Visit Personal Site &nbsp;
                    <LanguageIcon></LanguageIcon>
                </Button>
                <Button 
                    href="https://github.com/gtorrini/portfolio"
                    variant="contained"
                    sx={{mx: 1}}
                >
                    View Portfolio &nbsp;
                    <GitHubIcon></GitHubIcon>
                </Button>
                <Button
                    href="www.linkedin.com/in/gabriela-torrini-9a2ab7235" 
                    variant="contained" 
                    sx={{mx: 1}}
                >
                    Connect with Me &nbsp;
                    <LinkedInIcon></LinkedInIcon>
                </Button>
            </Box>
        </>
    );
}