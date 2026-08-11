console.log("dashboard.js is running");

checkAuth();


// ==========================================
// GLOBAL VARIABLES
// ==========================================

let dashboardSongs = [];

let currentSongIndex = -1;

let isPlaying = false;


// ==========================================
// LOAD DASHBOARD DATA
// ==========================================

async function loadDashboardData() {

    try {

        const headers = getAuthHeaders();


        // FETCH SONGS
        const songsResponse =
            await fetch(
                "http://localhost:5000/api/songs",
                {
                    headers: headers
                }
            );


        // FETCH ALBUMS
        const albumsResponse =
            await fetch(
                "http://localhost:5000/api/albums",
                {
                    headers: headers
                }
            );


        const songs =
            await songsResponse.json();


        const albums =
            await albumsResponse.json();


        console.log("Songs:", songs);

        console.log("Albums:", albums);


        // SAVE SONGS

        if (Array.isArray(songs)) {

            dashboardSongs = songs;

        }


        // DISPLAY SONGS

        loadTrendingSongs(
            dashboardSongs
        );


        // DISPLAY ALBUMS

        loadNewAlbums(
            albums
        );


    } catch (error) {

        console.error(
            "Error loading dashboard data:",
            error
        );

    }

}



// ==========================================
// GET ARTIST NAME
// ==========================================

function getArtistName(song) {

    if (song.Artist) {

        return (
            song.Artist.name ||
            song.Artist.artist_name ||
            "Unknown Artist"
        );

    }


    if (song.artist) {

        return (
            song.artist.name ||
            song.artist.artist_name ||
            "Unknown Artist"
        );

    }


    return "Unknown Artist";

}



// ==========================================
// GET ALBUM NAME
// ==========================================

function getAlbumName(song) {

    if (song.Album) {

        return (
            song.Album.title ||
            song.Album.album_name ||
            "No Album"
        );

    }


    if (song.album) {

        return (
            song.album.title ||
            song.album.album_name ||
            "No Album"
        );

    }


    return "No Album";

}



// ==========================================
// DISPLAY TRENDING SONGS
// ==========================================

function loadTrendingSongs(songs) {

    const container =
        document.getElementById(
            "trending-songs-container"
        );


    if (!container) {

        console.error(
            "Trending songs container not found."
        );

        return;

    }


    container.innerHTML = "";


    if (!Array.isArray(songs)) {

        container.innerHTML =
            "<p>Unable to load songs.</p>";

        return;

    }


    if (songs.length === 0) {

        container.innerHTML =
            "<p>No songs found.</p>";

        return;

    }


    songs.forEach((song) => {

        const originalIndex =
            dashboardSongs.indexOf(song);


        const songCard =
            document.createElement("div");


        songCard.classList.add(
            "song-card"
        );


        const artistName =
            getArtistName(song);


        const albumName =
            getAlbumName(song);


        songCard.innerHTML = `

            <h3>${song.title}</h3>

            <p>
                <strong>Artist:</strong>
                ${artistName}
            </p>

            <p>
                <strong>Album:</strong>
                ${albumName}
            </p>

            <button class="song-play-btn">
                Play
            </button>

        `;


        const playButton =
            songCard.querySelector(
                ".song-play-btn"
            );


        playButton.addEventListener(
            "click",
            function () {

                playSong(originalIndex);

            }
        );


        container.appendChild(
            songCard
        );

    });

}



// ==========================================
// SEARCH SONGS
// ==========================================

function searchSongs(searchText) {

    const searchTerm =
        searchText
            .trim()
            .toLowerCase();


    if (searchTerm === "") {

        loadTrendingSongs(
            dashboardSongs
        );

        return;

    }


    const filteredSongs =
        dashboardSongs.filter(song => {

            const title =
                (song.title || "")
                    .toLowerCase();


            const artist =
                getArtistName(song)
                    .toLowerCase();


            const album =
                getAlbumName(song)
                    .toLowerCase();


            return (
                title.includes(searchTerm) ||
                artist.includes(searchTerm) ||
                album.includes(searchTerm)
            );

        });


    if (filteredSongs.length === 0) {

        const container =
            document.getElementById(
                "trending-songs-container"
            );


        container.innerHTML = `

            <p>
                No songs found for
                "${searchText}".
            </p>

        `;


        return;

    }


    loadTrendingSongs(
        filteredSongs
    );

}



// ==========================================
// PLAY SONG
// ==========================================

function playSong(index) {

    if (
        index < 0 ||
        index >= dashboardSongs.length
    ) {

        return;

    }


    currentSongIndex = index;

    isPlaying = true;


    const song =
        dashboardSongs[
            currentSongIndex
        ];


    const artistName =
        getArtistName(song);


    document.getElementById(
        "player-song-title"
    ).textContent =
        song.title;


    document.getElementById(
        "player-song-artist"
    ).textContent =
        artistName;


    document.getElementById(
        "play-pause-btn"
    ).textContent =
        "⏸";


    console.log(
        "Selected song:",
        song.title
    );

}



// ==========================================
// PLAY / PAUSE
// ==========================================

function togglePlayPause() {

    if (dashboardSongs.length === 0) {

        return;

    }


    if (currentSongIndex === -1) {

        playSong(0);

        return;

    }


    isPlaying =
        !isPlaying;


    const button =
        document.getElementById(
            "play-pause-btn"
        );


    if (isPlaying) {

        button.textContent =
            "⏸";

    } else {

        button.textContent =
            "▶";

    }

}



// ==========================================
// NEXT SONG
// ==========================================

function nextSong() {

    if (dashboardSongs.length === 0) {

        return;

    }


    if (currentSongIndex === -1) {

        playSong(0);

        return;

    }


    let nextIndex =
        currentSongIndex + 1;


    if (
        nextIndex >=
        dashboardSongs.length
    ) {

        nextIndex = 0;

    }


    playSong(
        nextIndex
    );

}



// ==========================================
// PREVIOUS SONG
// ==========================================

function previousSong() {

    if (dashboardSongs.length === 0) {

        return;

    }


    if (currentSongIndex === -1) {

        playSong(0);

        return;

    }


    let previousIndex =
        currentSongIndex - 1;


    if (previousIndex < 0) {

        previousIndex =
            dashboardSongs.length - 1;

    }


    playSong(
        previousIndex
    );

}



// ==========================================
// START LISTENING
// ==========================================

function startListening() {

    if (dashboardSongs.length === 0) {

        return;

    }


    playSong(0);

}



// ==========================================
// DISPLAY NEW ALBUMS
// ==========================================

function loadNewAlbums(albums) {

    const container =
        document.getElementById(
            "new-albums-container"
        );


    if (!container) {

        console.error(
            "New albums container not found."
        );

        return;

    }


    container.innerHTML = "";


    if (!Array.isArray(albums)) {

        container.innerHTML =
            "<p>Unable to load albums.</p>";

        return;

    }


    if (albums.length === 0) {

        container.innerHTML =
            "<p>No albums available yet.</p>";

        return;

    }


    albums.forEach(album => {

        const albumCard =
            document.createElement("div");


        albumCard.classList.add(
            "album-card"
        );


        let artistName =
            "Unknown Artist";


        if (album.Artist) {

            artistName =
                album.Artist.name ||
                album.Artist.artist_name ||
                "Unknown Artist";

        } else if (album.artist) {

            artistName =
                album.artist.name ||
                album.artist.artist_name ||
                "Unknown Artist";

        }


        const albumTitle =
            album.title ||
            album.album_name ||
            "Untitled Album";


        let releaseYear =
            "Unknown";


        if (album.release_date) {

            releaseYear =
                new Date(
                    album.release_date
                ).getFullYear();

        } else if (album.releaseDate) {

            releaseYear =
                new Date(
                    album.releaseDate
                ).getFullYear();

        }


        albumCard.innerHTML = `

            <h3>${albumTitle}</h3>

            <p>
                <strong>Artist:</strong>
                ${artistName}
            </p>

            <p>
                Released ${releaseYear}
            </p>

        `;


        container.appendChild(
            albumCard
        );

    });

}



// ==========================================
// SEARCH EVENT
// ==========================================

document
    .getElementById("search-bar")
    .addEventListener(
        "input",
        function () {

            searchSongs(
                this.value
            );

        }
    );



// ==========================================
// PLAYER BUTTONS
// ==========================================

document
    .getElementById("play-pause-btn")
    .addEventListener(
        "click",
        togglePlayPause
    );


document
    .getElementById("next-btn")
    .addEventListener(
        "click",
        nextSong
    );


document
    .getElementById("previous-btn")
    .addEventListener(
        "click",
        previousSong
    );


document
    .getElementById("start-listening-btn")
    .addEventListener(
        "click",
        startListening
    );



// ==========================================
// START DASHBOARD
// ==========================================

loadDashboardData();