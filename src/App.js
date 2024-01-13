import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import Search from './Components/Search';
import Forum from './Components/Forum';
import Logreg from './Components/Login_register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { userContext } from './Components/User_Context';


function App() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("search for music");
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/1'); // Adjust the endpoint accordingly
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };


    fetchUser();
  }, []);



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
      <userContext.Provider value={this.state.user}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Logreg" element={<Logreg />} />
        </Routes>
      </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;