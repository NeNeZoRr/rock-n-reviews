// Components/Covers/Gallery.js
// Displays a gallery of items based on provided data
import GalleryItem from './GalleryItem';
import PropTypes from 'prop-types';

function Gallery({ data }) {
    // Display a message if no items are available
    if (!data || data.length === 0) {
        return <p>No items to display.</p>;
    }

    // Map through the data and render GalleryItem for each item
    const display = data.map((item) => (
        <GalleryItem item={item} key={item.id} />
    ));

    return <div className="gallery-container">{display}</div>;
}

Gallery.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            trackName: PropTypes.string.isRequired,
            collectionName: PropTypes.string,
            artistId: PropTypes.number.isRequired,
            artworkUrl100: PropTypes.string,
            collectionId: PropTypes.number,
            primaryGenreName: PropTypes.string,
            releaseDate: PropTypes.string,
        })
    ).isRequired,
};

export default Gallery;
