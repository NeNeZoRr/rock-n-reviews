// Components/Covers/GalleryItem.js
// Displays an individual item within the gallery
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function GalleryItem({ item }) {
    const [isDetailView, setDetailView] = useState(false);

    // Toggle between simple and detailed view
    const toggleDetailView = () => {
        setDetailView(!isDetailView);
    };

    // Return null if item is not available
    if (!item) {
        return null;
    }

    // Determine the style based on the view mode
    const itemStyle = isDetailView ? 'gallery-item-detail' : 'gallery-item-simple';
    const itemKey = item.id || null;
    const artistLink = item.artistId ? (
        <Link to={`/artist/${item.artistId}`}>{item.artistName}</Link>
    ) : null;

    const detailViewStyle = isDetailView
        ? {
            backgroundImage: item.artworkUrl100 ? `url(${item.artworkUrl100})` : 'none',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            color: 'red',
        }
        : null;

    return (
        <div onClick={toggleDetailView} className="gallery-item-container" key={itemKey}>
            <div className={`gallery-item ${itemStyle}`} style={detailViewStyle}>
                {isDetailView ? (
                    <div>
                        <h2>{item.trackName}</h2>
                        <h3>{artistLink}</h3>
                        <h3>
                            <Link to={`/album/${item.collectionId}`}>{item.collectionName}</Link>
                        </h3>
                        <h4>{item.primaryGenreName}</h4>
                        <h4>{item.releaseDate}</h4>
                    </div>
                ) : (
                    <div>
                        <h3>{item.trackName}</h3>
                        <h4>{item.collectionName}</h4>
                    </div>
                )}
            </div>
        </div>
    );
}

GalleryItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        trackName: PropTypes.string.isRequired,
        collectionName: PropTypes.string,
        artistId: PropTypes.number.isRequired,
        artworkUrl100: PropTypes.string,
        collectionId: PropTypes.number,
        primaryGenreName: PropTypes.string,
        releaseDate: PropTypes.string,
    }),
};

export default GalleryItem;
