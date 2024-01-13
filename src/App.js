import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Search/Navigation'
import Home from './Components/Home'
import Reviews from './Components/Reviews'
import AlbumView from './Components/Covers/AlbumCover'
import SongView from './Components/Covers/SongCover'
import Forum from './Components/Forum/Forum'
import Logreg from './Components/Regs/Login_register'
import SearchPG from './Components/Search/SearchPG'
import AdminPage from './Components/AdminPage'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPG />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/logreg" element={<Logreg />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/admin" element={<AdminPage />} /> 
          <Route path='/album/:id' element={<AlbumView />} />
          <Route path='/song/:id' element={<SongView />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App