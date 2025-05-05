import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BookingsPage from './pages/Booking';
import Destination from './pages/Desitnations';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import FlightsPage from './pages/Flights';
import HotelsPage from './pages/Hotels'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<BookingsPage />} />
        <Route path='/destinations' element={<Destination />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/flights' element={<FlightsPage />} />
        <Route path='/hotels' element={<HotelsPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
