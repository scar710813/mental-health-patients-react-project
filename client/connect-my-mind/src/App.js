import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Video from './components/Video.js';
import Home from './components/pages/Home';
import OnlineAppointments from './components/pages/OnlineAppointments';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/onlineappointments' element={<OnlineAppointments/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;