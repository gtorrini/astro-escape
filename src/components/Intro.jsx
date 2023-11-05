import { React } from 'react';
import { Box, Typography } from '@mui/material';

export default function Intro() {
    return (
        <>
            <Box sx={{my: 5}}>
                <Typography variant="h4">
                    Welcome!
                </Typography>
                <Typography variant="body1" sx={{my: 3}}>
                    You have just entered space near a black hole. Can you escape?
                </Typography>
            </Box>
        </>
    );
}
