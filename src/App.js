import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navigation from './Components/Search/Navigation'
import Reviews from './Components/Review/Reviews'
import AlbumCover from './Components/Covers/AlbumCover'
import SongCover from './Components/Covers/SongCover'
import Forum from './Components/Forum/CoverForum'
import Gallery from './Components/Gallery/Gallery'
// import Search from './Components/Search/Search'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/search/{:id}" element={<Search />} /> */}
          <Route path="/gallery" element={<Gallery />} />
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