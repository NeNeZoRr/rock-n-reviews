// Components/Covers/SearchResultsPage.js
// Displays search results or a message if no results are found

import React from 'react';
import Gallery from './Gallery';

function SearchResultsPage({ searchResults }) {
    // Check if searchResults is an array and not empty
    const hasResults = Array.isArray(searchResults) && searchResults.length > 0;

    return (
        <div>
            {hasResults ? (
                <Gallery data={searchResults} />
            ) : (
                // Display "No results found" only when there are no results and they are not being fetched
                searchResults === null && <p>No results found.</p>
            )}
            {/* Add any additional content or styling for the search results page here */}
        </div>
    );
}

export default SearchResultsPage;
