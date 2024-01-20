import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Reviews from "./Components/Review/Reviews";
import AlbumView from "./Components/Views/AlbumView";
import SongView from "./Components/Views/SongView";
import CoverForum from "./Components/Forum/CoverForum";
// import Search from './Components/Search/Search'

// Main App component
function App() {
	// Render the App component with navigation and routing for different sections
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/search" element={<Search />} /> */}
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
