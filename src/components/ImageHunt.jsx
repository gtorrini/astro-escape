// 3rd-party imports
import { React, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Local imports
import { NextButton } from './NavButtons.jsx';
import { ViewportContext } from './useViewport.js';

// Personal item image data
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1632757664317-adc33c576b2f',
    title: 'Dog polaroid',
  },
  {
    img: 'https://images.unsplash.com/photo-1598962073869-f9282d672af0',
    title: 'Crackers',
  },
  {
    img: 'https://images.unsplash.com/photo-1588411404261-6052062cb881',
    title: 'Sketch pad',
  }, 
  {
    img: 'https://images.unsplash.com/photo-1608797689272-9fffaa177090',
    title: 'Seasoning',
  },
  {
    img: 'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3',
    title: 'Playing cards',
  },
  {
    img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd',
    title: 'Camera',
  },
  {
    img: 'https://clipground.com/images/manual-clipart-2.jpg',
    title: 'Instruction manual',
  }, 
  {
    img: 'https://live.staticflickr.com/5246/5297985633_2d26ffc29b_k_d.jpg',
    title: 'Luma plushie',
  },
  {
    img: 'https://images.unsplash.com/photo-1612016293124-1636e3d99b6a',
    title: 'Knitting needles',
  },
  {
    img: 'https://live.staticflickr.com/3208/2763488097_56bf92b0ea_k_d.jpg',
    title: 'Eye mask',
  },
  {
    img: 'https://images.unsplash.com/photo-1585849835117-1446a1514ea6',
    title: 'Tea',
  },
  {
    img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634',
    title: 'Colored pencils',
  }
];

// Image list of personal items
function PersonalItemsList(props) {
  const width = useContext(ViewportContext);

  const calcDims = (currentWidth) => {
    // Calculate appropriate width, height, and rowHeight
    if (currentWidth <= 480) {
      return (250, 225, 85);
    } else {
      return (500, 450, 164);
    }
  }

  const handleKeyDown = (event, name) => {
    if (event.key === "Enter") {
      props.handleClick(name);
    }
  }

  return (
    <ImageList 
      sx={{ width: (calcDims(width))[0], height: (calcDims(width))[1], mx: 'auto' }} 
      cols={3} 
      rowHeight={(calcDims(width))[2]}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=${(calcDims())[2]}&h=${(calcDims())[2]}&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=${(calcDims())[2]}&h=${(calcDims())[2]}&fit=crop&auto=format`}
            alt={item.title}
            onClick={() => props.handleClick(item.title)}
            onKeyDown={(e) => handleKeyDown(e, item.title)}
            loading="lazy"
            tabIndex={0}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

PersonalItemsList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

// Component to find instruction manual
export default function ImageHunt(props) {
    const [found, setFound] = useState(false);

    const handleFound = (item) => {
        if (item === 'Instruction manual') {
          setFound(true);
        }
    }

    return (
        <>
            <Box sx={{ maxWidth: '80%', mx: 'auto', my: 5}}>
              <PersonalItemsList handleClick={handleFound}></PersonalItemsList>
            </Box>
            <Grid container>
                <Grid item xs={4} />
                <Grid item xs={4} />
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