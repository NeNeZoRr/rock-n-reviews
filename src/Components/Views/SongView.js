// import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function SongView() {
    const { id } = useParams()

    return (
        <div>
            <p>Song Data Goes Here!</p>
            <p>ID: {id}</p>
        </div>
    )
}

export default SongView