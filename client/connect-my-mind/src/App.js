import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import OnlineAppointments from './components/pages/OnlineAppointments';
import SignUp from './components/pages/SignUp';
import LocalAppointments from './components/pages/LocalAppointments';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/onlineappointments' element={<OnlineAppointments/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/localappointments' element={<LocalAppointments/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;