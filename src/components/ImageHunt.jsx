import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material'; 
import { NextButton } from './NavButtons.jsx';
import ppk from '../assets/ppk.png';

export default function ImageHunt(props) {
    const [found, setFound] = useState(false);

    const handleFound = () => {
        setFound(true);
    }

    const calcCoords = () => {
        const width = window.innerWidth;

        // Coords for phones
        if (width <= 480) {
            return "75, 85, 110, 90, 105, 130, 65, 120";
        }
        // Coords for tablets
        else if (width > 480 && width <= 768) {
            return "110, 120, 155, 130, 145, 180, 100, 170";
        }
        // Coords for small laptops
        else if (width > 768 && width <= 1024) {
            return "170, 185, 240, 195, 220, 280, 145, 260";
        }
        // Coords for large laptops
        else if (width > 1024 && width <= 1280) {
            return "260, 280, 360, 295, 335, 420, 225, 400";
        }
        // Coords for desktops
        else if (width > 1280 && width <= 1600) {
            return "320, 345, 450, 365, 425, 525, 280, 500";
        }
    }

    return (
        <>
            <Box sx={{my:5, maxWidth: '60%', mx: 'auto'}}>
                <Typography className='site-heading' variant="h5" gutterBottom>
                    Puzzle #1
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'center'}}>
                    You want to look up the protocol for flying near black holes, but you misplaced your mission manual. Search through your personal items below to find it:
                </Typography>
            </Box>
            <Box sx={{my: 5}}>
                <img src={ppk} id="img-search" alt="Personal items" useMap="#ppk"></img>
                <map name="ppk">
                    <area 
                        shape="poly"
                        coords={calcCoords()}
                        alt="Manual"
                        href="javascript:void(0);"
                        onClick={() => handleFound()}
                    ></area>
                </map>
            </Box>
            <Grid container>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <NextButton disabled={found === false} handleClick={props.next}></NextButton>
                </Grid>
            </Grid>
        </>
    ); 
}

ImageHunt.propTypes = {
    next: PropTypes.func.isRequired
};
