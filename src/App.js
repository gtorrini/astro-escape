// 3rd-party imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
 
// Local imports
import './App.css';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Escape from './components/Escape.jsx';
import ResponsiveAppBar from './components/NavBar.jsx';

// App-wide MUI styling and overrides
let darkTheme = createTheme({
  palette: {
      mode: 'dark',
  },
  typography: {
    h4: {
        fontFamily: "Silkscreen",
    },
    h5: {
        fontFamily: "Silkscreen",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No button ripples in whole app
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true, // No button ripples in whole app
      },
    },
  }
});

darkTheme = responsiveFontSizes(darkTheme);

export default function App() {
  return (
        <ThemeProvider theme={darkTheme}>
          <Router>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/play' element={<Escape></Escape>}></Route>
              <Route path='/about' element={<About></About>}></Route>
            </Routes>
          </Router>
          <ResponsiveAppBar></ResponsiveAppBar>
          <main>
          </main>
          <footer>
            <Container maxWidth='xl' sx={{ backgroundColor: '#193154' }}>
              <Typography variant='body1' sx={{ padding: 1, textAlign: 'center'}}>
                Copyright {'\u00A9'} 2023 Gabriela Torrini
              </Typography>
            </Container>
          </footer>
        </ThemeProvider>
  );
}