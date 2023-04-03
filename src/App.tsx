import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import SearchAppBar from './components/SearchAppBar';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom';
import Home from './views/Home';
import Game from './views/Game';
import { Box, Grid } from '@mui/material';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <SearchAppBar />
        <Box
          sx={{
            paddingTop: '65px',
            paddingLeft: '250px',
            height: '100vh',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
