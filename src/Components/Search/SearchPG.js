import React, { useState } from 'react';
import Search from './Search';
import Gallery from '../Covers/Cover';
import { Container, Row, Col } from 'react-bootstrap';

async function searchContent(query) {
    try {
    } catch (error) {
        console.error('Error searching content:', error);
        return [];
    }
}

function SearchPG() {
    const [search, setSearch] = useState('')
    const [message, setMessage] = useState('Search for music')
    const [data, setData] = useState([])

    const handleSearch = async (term) => {
        setSearch(term)
        const results = await searchContent(term)
        setData(results)
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Welcome to Rock-n-Reviews Search</h1>
                    <p>Search for your favorite music and explore the results.</p>
                    <Search handleSearch={handleSearch} message={message} />
                    <Gallery data={data} />
                </Col>
            </Row>
        </Container>
    )
}

export default SearchPG