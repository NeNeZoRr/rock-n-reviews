// Components/Covers/SearchBar.js
// Displays a search bar with options to search and clear
import React, { useState } from "react";
import PropTypes from "prop-types";

function SearchBar({ handleSearch, clearSearchTerm }) {
	const [searchTerm, setSearchTerm] = useState("");

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(searchTerm);
	};

	// Handle input change
	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	// Clear search term
	const handleClearSearch = () => {
		setSearchTerm("");
		clearSearchTerm();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				style={{
					width: "30vw",
					height: "2rem",
					borderRadius: "8px",
					marginRight: ".5rem",
				}}
				type="text"
				value={searchTerm}
				onChange={handleInputChange}
				placeholder="Discover your next beat"
			/>
			<button style={{ width: "5rem", borderRadius: "8px" }} type="submit">
				Search
			</button>
			<button
				style={{ width: "5rem", marginLeft: ".5rem", borderRadius: "8px" }}
				type="button"
				onClick={handleClearSearch}>
				Clear
			</button>
		</form>
	);
}

SearchBar.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	clearSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
