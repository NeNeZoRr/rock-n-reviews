// Components/Home.js
// Main component for the home page
import React, { useState, useEffect } from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Covers/SearchBar';
import SearchResultsPage from './Covers/SearchResultsPage';
import { fetchSearchResults, fetchRandomAlbumsAndSongs, generateRandomSearchTerm } from '../API';
import Gallery from './Covers/Gallery';

// Function component for Home
function Home() {
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [clearSearch, setClearSearch] = useState(false);

    // Fetch random albums and songs on mount and every 10 seconds
    useEffect(() => {
        const fetchData = async () => {
            try {
                const randomSearchTerm = generateRandomSearchTerm();
                const { albums: fetchedAlbums, songs: fetchedSongs } = await fetchRandomAlbumsAndSongs(randomSearchTerm);
                setAlbums(fetchedAlbums);
                setSongs(fetchedSongs);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    // Function to handle search
    const handleSearch = async (searchTerm) => {
        try {
            const results = await fetchSearchResults(searchTerm);
            setSearchResults(results.searchResults);
            setClearSearch(false);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    // Function to clear search term
    const clearSearchTerm = () => {
        setSearchResults([]);
        setClearSearch(true);
    };

    // Render the Home component with different sections
    return (
        <div style={{ border: '4px solid black', padding: '1px' }}>
            {/* Search Section */}
            <section style={{ padding:'10px'}}className="search-section">
                <SearchBar handleSearch={handleSearch} clearSearchTerm={clearSearchTerm} />
            </section>

            {/* Search Results Section */}
            <section className="search-results-section">
                <SearchResultsPage searchResults={searchResults} clearSearch={clearSearch} />
            </section>

            {/* Carousel Section for Albums */}
            <section className="carousel-section">
                <Carousel>
                    {albums.map((album, index) => (
                        <Carousel.Item key={album.trackId} className={index === 0 ? 'active' : ''}>
                            <img
                                className="d-block w-100"
                                src={album.artworkUrl100}
                                alt={album.collectionName}
                                style={{ height: '300px', objectFit: 'cover', border: '4px solid black' }}
                            />
                            <Carousel.Caption>
                                <h3>{album.collectionName}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </section>

            {/* Album Cards Section */}
            <section className="album-cards-section">{renderCard(albums, 'album')}</section>

            {/* Carousel Section for Songs */}
            <section className="carousel-section" style={{ marginTop: '20px' }}>
                <Carousel>
                    {songs.map((song, index) => (
                        <Carousel.Item key={song.trackId} className={index === 0 ? 'active' : ''}>
                            <img
                                className="d-block w-100"
                                src={song.artworkUrl100}
                                alt={song.trackName}
                                style={{ height: '300px', objectFit: 'cover', border: '4px solid black' }}
                            />
                            <Carousel.Caption>
                                <h3>{song.trackName}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </section>

            {/* Song Cards Section */}
            <section className="song-cards-section">{renderCard(songs, 'song')}</section>
        </div>
    );
}

// Helper function to render cards based on data type (album or song)
const renderCard = (data, type) => (
    <Row className="justify-content-md-center mt-3">
        {data.map((item) => (
            <Col key={item.trackId} md={3}>
                <Card style={{ width: '18rem', marginLeft: '90px', border: '4px solid black' }}>
                    <Card.Img
                        variant="top"
                        src={item.artworkUrl100}
                        alt={item.collectionName || item.trackName}
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>{item.collectionName || item.trackName}</Card.Title>
                        <Card.Text>{type === 'album' ? 'Artist: ' + item.artistName : 'Track: ' + item.trackName}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
);

export default Home;
