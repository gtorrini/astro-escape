import { React } from 'react';
import { Box, Typography } from '@mui/material';

export default function Outro() {
    return (
        <>
            <Box sx={{my: 5, maxWidth: '60%', mx: 'auto'}}>
                <Typography className='site-heading' variant="h4">
                    {'\u2726'} CONGRATULATIONS {'\u2726'}
                </Typography>
                <Typography variant="body1" sx={{my: 3}}>
                    Thanks for playing!
                </Typography>
            </Box>
        </>
    );
}