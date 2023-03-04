import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}


export default App;
