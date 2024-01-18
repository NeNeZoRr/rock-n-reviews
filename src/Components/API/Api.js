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

        if (!albumsResponse.ok || !songsResponse.ok) {
            throw new Error(`Failed to fetch data: ${albumsResponse.statusText}, ${songsResponse.statusText}`)
        }

        const [albumsData, songsData] = await Promise.all([
            albumsResponse.json(),
            songsResponse.json(),
        ]);

        return { albums: albumsData.results, songs: songsData.results }
    } catch (error) {
        console.error('Error fetching albums and songs data:', error.message)
        return { albums: [], songs: [] }
    }
}

export async function searchITunes(term, country = 'US', media = 'all') {
    try {
        const apiUrl = `${BASE_URL}/search?term=${term}&entity=allArtist&attribute=allArtistTerm&entity=album`
        const response = await fetch(apiUrl)
        const searchData = await response.json()
        // console.log(searchData)
        return searchData.results
    } catch (error) {
        console.error('Error searching iTunes:', error)
        return []
    }
}

function generateRandomSearchTerm() {
    const searchTerms = ['music', 'song', 'album', 'rock', 'pop', 'jazz', 'country', 'classical' ]
    const randomIndex = Math.floor(Math.random() * searchTerms.length)
    return searchTerms[randomIndex]
}
