import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// to be barrel loaded vvv
import Navigation from "./Components/Navigation";
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import Forum from './Components/Forum';
import Logreg from './Components/Login_register';
import AlbumView from "./Components/Views/AlbumView";
import SongView from './Components/Views/SongView';

function App() {

  
    return (
      <div className="App">
        <Navigation />
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/album/:id' element={<AlbumView />} />
            <Route path='/song/:id' element={<SongView />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Logreg" element={<Logreg />} />
        </Routes> 
      </Router>         
      </div>
    );
  }

export default App;