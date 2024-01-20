import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ handleSearch, clearSearchTerm }) {
    const [searchTerm, setSearchTerm] = useState('');

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
        setSearchTerm('');
        clearSearchTerm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Discover your next beat"
            />
            <button type="submit">Search</button>
            <button type="button" onClick={handleClearSearch}>
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
