import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Escape from './components/Escape.jsx';
import About from './components/About.jsx';

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
  }
});

darkTheme = responsiveFontSizes(darkTheme);

function App() {
  return (
        <ThemeProvider theme={darkTheme}>
          <ResponsiveAppBar></ResponsiveAppBar>
          <main className="App">
            <Router>
              <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/play' element={<Escape></Escape>}></Route>
                <Route path='/about' element={<About></About>}></Route>
              </Routes>
            </Router>
          </main>
        </ThemeProvider>
  );
}

export default App;
