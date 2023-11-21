import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ViewportContext } from './useViewport.js';

export default function PuzzleIntro(props) {
  const width = useContext(ViewportContext);

  const checkChildren = () => {
    if (props.children) {
      return (
        props.children
      );
    }
  }

  return (
    <Box 
      sx={{ 
        maxWidth: (width <= 650) ? '95%' : '60%',
        mx: 'auto',
        my: 5 
      }}
    >
      <Typography className="site-heading" variant='h5' gutterBottom>
        {props.title}
      </Typography>
      <Typography 
        variant='body1' 
        sx={{ mb: (props.children) ? 3 : 0, textAlign: 'center' }}
      >
        {props.blurb}
      </Typography>
      {checkChildren()}
    </Box>
  );
}

PuzzleIntro.propTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  children: PropTypes.element
}