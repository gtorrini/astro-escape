// 3rd party imports
import {memo, React} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

// Access previous puzzle
const BackButton = memo(
  function BackButton(props) {
    return (
      <>
          <Button
            aria-label="Previous puzzle"
            onClick={() => props.handleClick()}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                props.handleClick();
              }
            }}
            variant='contained'
          >
            <ArrowBackIcon/>
          </Button>
      </>
    );
  }
);

BackButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

// Access the next puzzle
const NextButton = memo (
  function NextButton(props) {
    return (
      <>
        <Button
          aria-label="Next puzzle"
          disabled={props.disabled}
          onClick={() => props.handleClick()}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.handleClick();
            }
          }}
          variant='contained'
        >
          <ArrowForwardIcon/>
        </Button>
      </>
    );
  }
);

NextButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

// Reset the game (start from puzzle 1)
const RestartButton = memo (
  function RestartButton(props) {
    return (
      <>
        <Button
          aria-label="Restart game"
          onClick={() => props.handleClick()}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.handleClick();
            }
          }}
          variant='contained'
        >
          <RestartAltIcon/>
        </Button>
      </>
    );
  }
);

RestartButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export { BackButton, NextButton, RestartButton };
