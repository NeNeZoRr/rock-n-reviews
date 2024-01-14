const BASE_URL = 'https://itunes.apple.com/'

export async function fetchRandomAlbumsAndSongs() {
    try {
        const albumsResponse = await fetch(`${BASE_URL}search?term=album&entity=album&limit=4`)
        const songsResponse = await fetch(`${BASE_URL}search?term=song&entity=song&limit=4`)

        const albums = await albumsResponse.json()
        const songs = await songsResponse.json()

        return { albums, songs }
    } catch (error) {
        console.error('Error fetching data:', error)
        return { albums: [], songs: [] }
    }
}
