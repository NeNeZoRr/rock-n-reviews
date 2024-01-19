import React from 'react'
import './App.css'
import Home from './Components/Home'
import Navigation from './Components/Search/Navigation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Reviews from './Components/Review/Reviews'
// import AlbumCover from './Components/Covers/AlbumCover'
// import SongCover from './Components/Covers/SongCover'
import Forum from './Components/Forum/CoverForum'
import Search from './Components/Search/Search'
import AlbumView from "./Components/Views/AlbumView";
import SongView from './Components/Views/SongView';
import Logreg from './Components/Regs/Login_register'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Components/Regs/Register'
import Forum from './Components/Forum/CoverForum'




function App() {


  return (

    <div className="App">

      <Router>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/song/:id" element={<SongView />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/forum" element={<Forum />} />
          <Route path='/logreg' element={<Logreg />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App