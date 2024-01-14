const BASE_URL = 'https://itunes.apple.com'

export async function fetchRandomAlbumsAndSongs() {
    try {
        const randomSearchTerm = generateRandomSearchTerm()
        const albumsApiUrl = `${BASE_URL}/search?term=${randomSearchTerm}&entity=album&limit=4`
        const songsApiUrl = `${BASE_URL}/search?term=${randomSearchTerm}&entity=song&limit=4`

        const [albumsResponse, songsResponse] = await Promise.all([
            fetch(albumsApiUrl),
            fetch(songsApiUrl),
        ])

        const [albumsData, songsData] = await Promise.all([
            albumsResponse.json(),
            songsResponse.json(),
        ])

        return { albums: albumsData.results, songs: songsData.results }
    } catch (error) {
        console.error('Error fetching albums and songs data:', error)
        return { albums: [], songs: [] }
    }
}

function generateRandomSearchTerm() {
    const searchTerms = ['music', 'song', 'album', 'rock', 'pop', 'jazz', 'country', 'classical', 'latin']
    const randomIndex = Math.floor(Math.random() * searchTerms.length)
    return searchTerms[randomIndex]
}
