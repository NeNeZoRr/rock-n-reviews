import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "./Components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from "./Components/Search";
import Home from "./Components/Home";
import Forum from './Components/Forum';

function App() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("Search for music");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        try {
          const uri = encodeURI(`https://itunes.apple.com/search?term=${search}`);
          const response = await fetch(uri);
          const resData = await response.json();
          if (resData.results.length > 0) {
            setData(resData.results);
          } else {
            setMessage("Not Found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [Search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            {}
            <Home />
          </Route>
          <Route path="/Forum">
            {}
            <Forum />
          </Route>
          {}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
