import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PuzzleIntro(props) {
  return (
    <Box 
      sx={{ 
        maxWidth: (window.innerWidth <= 650) ? '100%' : '60%',
        mx: 'auto',
        my: 5 
      }}
    >
      <Typography className="site-heading" variant='h5' gutterBottom>
        {props.title}
      </Typography>
      <Typography variant='body1' sx={{ textAlign: 'center' }}>
        {props.blurb}
      </Typography>
    </Box>
  );
}

PuzzleIntro.propTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired
}