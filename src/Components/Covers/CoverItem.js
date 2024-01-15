import React from 'react'

function CoverItem({ item, type }) {
  return (
    <div>
      <h3>{item.collectionName || item.trackName}</h3>
      <p>{type === 'album' ? 'Artist: ' + item.artistName : 'Track: ' + item.trackName}</p>
    </div>
  )
}

export default CoverItem
