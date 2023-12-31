// 3rd-party imports
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
 
// Local imports
import './App.css';
import ResponsiveAppBar from './components/NavBar.jsx';
import { ViewportProvider } from './components/useViewport.js';
const About = React.lazy(() => import('./routes/About.jsx'));
const Home = React.lazy(() => import('./routes/Home.jsx'));
const Play = React.lazy(() => import('./routes/Play.jsx'));

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
      <ViewportProvider>
        <ResponsiveAppBar></ResponsiveAppBar>
        <main>
            <React.Suspense fallback={<h5>Loading page...</h5>}>
              <Routes>
                <Route path='/index.html' element={<Home></Home>}></Route>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/play' element={<Play></Play>}></Route>
                <Route path='/about' element={<About></About>}></Route>
              </Routes>
            </React.Suspense>
        </main>
        <footer>
          <Container maxWidth='100%' sx={{ backgroundColor: '#193154' }}>
            <Typography variant='body1' sx={{ padding: 1, textAlign: 'center'}}>
              Copyright {'\u00A9'} 2023 Gabriela Torrini
            </Typography>
          </Container>
        </footer>
      </ViewportProvider>
    </ThemeProvider>
  );
}
