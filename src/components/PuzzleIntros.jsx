import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PuzzleIntro(props) {
  return (
    <Box sx={{ my: 5 }}>
      <Typography className="site-heading" variant='h5' gutterBottom>
        {props.title}
      </Typography>
      <Typography variant='body1'>
        {props.blurb}
      </Typography>
    </Box>
  );
}

PuzzleIntro.propTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired
}