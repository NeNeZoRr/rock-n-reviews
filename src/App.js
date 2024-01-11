import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import Forum from './Components/Forum';
import Logreg from './Components/Login_register';
import AlbumView from "./Components/Views/AlbumView";
import SongView from './Components/Views/SongView';
import Search from './Components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("search for music");
  const [data, setData] = useState([]);
    
  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        try {
          const uri = encodeURI(`https://itunes.apple.com/search?term=${search}`);
          const response = await fetch(uri);
          const resData = await response.json();
          console.log(resData);
          if (resData.results.length > 0) {
            setData(resData.results);
          } else {
            setMessage("not Found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };
  
    return (
      <div className="App">
        <Navigation />
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Logreg" element={<Logreg />} />
            <Route path='/album/:id' element={<AlbumView />} />
            <Route path='/song/:id' element={<SongView />} />
        </Routes> 
      </Router>         
      </div>
    );
  }

export default App;