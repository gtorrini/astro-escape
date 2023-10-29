// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Intro from './components/Intro.jsx';
import Escape from './components/Escape.jsx';

const darkTheme = createTheme({
  palette: {
      mode: 'dark',
  },
  typography: {
      h4: {
          fontFamily: "Silkscreen",
      },
      h6: {
          fontFamily: "Silkscreen",
      },
  },
});

function App() {
  return (
        <ThemeProvider theme={darkTheme}>
          <div className="App">
            <Router>
              <Routes>
                <Route path='/' element={<Intro></Intro>}></Route>
                <Route path='/play' element={<Escape></Escape>}></Route>
                {/* <Route path='/about'></Route> */}
              </Routes>
            </Router>
          </div>
        </ThemeProvider>
  );
}

export default App;
