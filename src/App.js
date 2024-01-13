import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Reviews from './Components/Reviews'
import AlbumView from './Components/Views/AlbumView'
import SongView from './Components/Views/SongView'
import Forum from './Components/Forum'
import Logreg from './Components/Login_register'
import SearchPG from './Components/SearchPG'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPG />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/logreg" element={<Logreg />} />
          <Route path="/forum" element={<Forum />} />
          <Route path='/album/:id' element={<AlbumView />} />
          <Route path='/song/:id' element={<SongView />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

