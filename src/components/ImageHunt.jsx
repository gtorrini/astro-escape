import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material'; 
import { BackButton, NextButton } from './NavButtons.jsx';
import ppk from '../ppk.png';

export default function ImageHunt(props) {
    const [found, setFound] = useState(false);

    const handleFound = () => {
        setFound(true);
    }

    return (
        <>
            <Box sx={{my: 5}}>
                <Typography variant="h6" gutterBottom>
                    What&#39;s the Procedure?
                </Typography>
                <Typography variant="body1">
                    You want to look up the protocol for flying near black holes, but you misplaced your mission manual. <br/> Search through your personal items below to find it.
                </Typography>
            </Box>
            <Box sx={{my: 5}}>
                <img src={ppk} alt="Personal items" useMap="#ppk" width="898" height="561"></img>
                <map name="ppk">
                    <area 
                        shape="poly"
                        coords="260, 280, 360, 295, 335, 420, 225, 400"
                        alt="Manual"
                        href="javascript:void(0);"
                        onClick={() => handleFound()}
                    ></area>
                </map>
            </Box>
            <Grid container>
                <Grid item xs={6}>
                    <BackButton handleClick={props.back}></BackButton>
                </Grid>
                <Grid item xs={6}>
                    {found &&
                        <NextButton handleClick={props.next}></NextButton>
                    }
                </Grid>
            </Grid>
        </>
    ); 
}

ImageHunt.propTypes = {
    back: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
};
