import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navigation from "./Components/Navigation";
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import Forum from './Components/Forum';
import Logreg from './Components/Login_register';
// import Search from "./Components/Search";

import { useEffect, useState } from "react";



function App() {
    let [search, setSearch] = useState("");
    let [message, setMessage] = useState("search for music");
    let [data, setData] = useState([]);
  
    //const API_URL = "https://itunes.apple.com/search?term=";
  
    useEffect(() => {
      if (search) {
        const fetchData = async () => {
          const uri = encodeURI(`https://itunes.apple.com/search?term=${search}`);
          const response = await fetch(uri);
          const resData = await response.json();
          console.log(resData);
          if (resData.results.length > 0) {
            setData(resData.results);
          } else {
            setMessage("not Found");
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
        </Routes> 
      </Router>         
      </div>
    );
}

export default App;