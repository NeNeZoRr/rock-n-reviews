import React from 'react'
import './App.css'
import Home from './Components/Home'
import Navigation from './Components/Search/Navigation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Reviews from './Components/Review/Reviews'
import AlbumCover from './Components/Covers/AlbumCover'
import SongCover from './Components/Covers/SongCover'
import Forum from './Components/Forum/CoverForum'
import Search from './Components/Search/Search'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/album/:id" element={<AlbumCover />} />
          <Route path="/song/:id" element={<SongCover />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App