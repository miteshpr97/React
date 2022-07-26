import React, { Component } from 'react';

import './App.css';
import Homepage from './components/Homepage';
import Navigation from './components/Navigation';
import About from './components/About';
import {  Route, Routes } from 'react-router-dom';
import Video from './components/Video';
import Secret from './components/Secret';



function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Video />
        <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path="secret/:username" element={<Secret />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
