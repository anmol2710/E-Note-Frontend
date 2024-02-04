import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Notes from './pages/Notes';
import LabNotes from './pages/Lab-Notes';


function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<CreateAccount />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/notes/:pageId' element={<Notes />} />
        <Route path='/Lab-notes/:pageId' element={<LabNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
