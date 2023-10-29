import { React } from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function Intro() {
    return (
        <>
            <Box sx={{my: 5}}>
                <Typography variant="h4">
                    ASTRO {'\u2726'} ESCAPE
                </Typography>
                <Typography variant="body1" sx={{my: 3}}>
                    Your spaceship has just entered the sphere of influence of a black hole. Can you escape?
                </Typography>
                <Button href="/play" variant="contained" sx={{mx: 2}}>Play Now</Button>
                <Button href="/about" variant="contained" sx={{mx: 2}}>About</Button>
            </Box>
        </>
    );
}
