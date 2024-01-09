import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';  
import Home from './Home'; 
import Forum from './Forum';
import Logreg from './Login_register';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Forum" element={<Forum />} />
                    <Route path="/Logreg" element={<Login_Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
