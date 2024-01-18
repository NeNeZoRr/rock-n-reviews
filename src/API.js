// API.js
// Responsible for handling API requests to iTunes

export const API_URL = 'https://itunes.apple.com';
export const ITUNES_API_LIMIT_HOME = 4;
export const ITUNES_API_LIMIT_SEARCH = 36;

// Function to fetch random albums and songs
export async function fetchRandomAlbumsAndSongs(randomSearchTerm = '') {
    try {
        const ITUNES_SEARCH_URL = `${API_URL}/search`;

        const albumsApiUrl = `${ITUNES_SEARCH_URL}?term=${randomSearchTerm}&entity=album&limit=${ITUNES_API_LIMIT_HOME}`;
        const songsApiUrl = `${ITUNES_SEARCH_URL}?term=${randomSearchTerm}&entity=song&limit=${ITUNES_API_LIMIT_HOME}`;

        const [albumsResponse, songsResponse] = await Promise.all([
            fetch(albumsApiUrl),
            fetch(songsApiUrl),
        ]);

        if (albumsResponse.status !== 200 || songsResponse.status !== 200) {
            throw new Error(`Failed to fetch data: ${albumsResponse.status} - ${albumsResponse.statusText}`);
        }

        const [albumsData, songsData] = await Promise.all([
            albumsResponse.json(),
            songsResponse.json(),
        ]);

        return { albums: albumsData.results, songs: songsData.results };
    } catch (error) {
        console.error('Error fetching albums and songs data:', error.message);
        return { albums: [], songs: [] };
    }
}

// Function to fetch search results
export async function fetchSearchResults(searchTerm) {
    try {
        const ITUNES_SEARCH_URL = `${API_URL}/search`;

        const searchApiUrl = `${ITUNES_SEARCH_URL}?term=${searchTerm}&limit=${ITUNES_API_LIMIT_SEARCH}`;

        const searchResponse = await fetch(searchApiUrl);

        if (searchResponse.status !== 200) {
            throw new Error(`Failed to fetch search results: ${searchResponse.status} - ${searchResponse.statusText}`);
        }

        const searchData = await searchResponse.json();

        return { searchResults: searchData.results };
    } catch (error) {
        console.error('Error fetching search results:', error.message);
        return { searchResults: [] };
    }
}

// Function to generate a random search term
export function generateRandomSearchTerm() {
    const searchTerms = ['music', 'song', 'album', 'rock', 'pop', 'jazz', 'country', 'classical'];
    const randomIndex = Math.floor(Math.random() * searchTerms.length);
    return searchTerms[randomIndex];
}

