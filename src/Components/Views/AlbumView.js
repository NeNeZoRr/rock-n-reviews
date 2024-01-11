import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AlbumView() {
    const [albumData, setAlbumData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:3000/album/${id}`;
                const response = await fetch(url);
                const data = await response.json();

                const songs = data.results.filter(item => item.wrapperType === 'track');
                setAlbumData(songs);
            } catch (error) {
                console.error('Error fetching album data:', error);
            }
        };
        fetchData();
    }, [id]);

    const songDisplay = albumData.map(song => (
        <div key={song.trackId}>
            <p>{song.trackName}</p>
        </div>
    ));

    return (
        <div>
            <p>Album Data Goes Here!</p>
            <p>ID: {id}</p>
            {songDisplay}
        </div>
    );
}

export default AlbumView;