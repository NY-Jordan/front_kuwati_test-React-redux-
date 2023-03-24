import { Paper, Stack } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dishes from './Pages/Dishes';
import Drinks from './Pages/Drinks';
import Home from './Pages/Layouts';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dishes />} />
          <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
