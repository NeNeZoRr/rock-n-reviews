// App.js
// Main component for routing and rendering different sections of the application
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AlbumView from './Components/Display/AlbumView';
import SongView from './Components/Display/SongView';
import SearchResultsPage from './Components/Covers/SearchResultsPage';
import CoverForum from './Components/Forum/CoverForum';
import Navigation from './Components/Navigation';
import Reviews from './Components/Review/Reviews';

// Main App component
function App() {
  // Render the App component with navigation and routing for different sections
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/song/:id" element={<SongView />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/forum" element={<CoverForum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
