console.log("songs.js is running");

checkAuth();

if (!isAdmin()) {
    document.getElementById("song-form").style.display = "none";
}

const container = document.getElementById("songs-container");
const form = document.getElementById("song-form");
const submitBtn = document.getElementById("submit-btn");

let editingSongId = null;

// LOAD ARTISTS INTO DROPDOWN
function loadArtistsDropdown() {

    fetch("http://localhost:5000/api/artists", {
        method: "GET",
        headers: getAuthHeaders()
    })
    .then(response => response.json())
    .then(artists => {

        const artistSelect = document.getElementById("artist_id");

        artistSelect.innerHTML = `<option value="">Select Artist</option>`;

        artists.forEach(artist => {

            artistSelect.innerHTML += `
                <option value="${artist.artist_id}">
                    ${artist.name}
                </option>
            `;

        });

    })
    .catch(error => console.error(error));

}

// LOAD ALBUMS INTO DROPDOWN
function loadAlbumsDropdown() {

    fetch("http://localhost:5000/api/albums", {
        method: "GET",
        headers: getAuthHeaders()
    })
    .then(response => response.json())
    .then(albums => {

        const albumSelect = document.getElementById("album_id");

        albumSelect.innerHTML = `<option value="">Select Album</option>`;

        albums.forEach(album => {

            albumSelect.innerHTML += `
                <option value="${album.album_id}">
                    ${album.title}
                </option>
            `;

        });

    })
    .catch(error => console.error(error));

}

// LOAD SONGS
function loadSongs() {

    fetch("http://localhost:5000/api/songs", {
        method: "GET",
        headers: getAuthHeaders()
    })
    .then(response => response.json())
    .then(songs => {

        container.innerHTML = "";

        songs.forEach(song => {

            const songCard = document.createElement("div");
            songCard.classList.add("song-card");

            songCard.innerHTML = `
                <h3>${song.title}</h3>

                <p><strong>Duration:</strong> ${song.duration}</p>

                <p><strong>Release Date:</strong> ${song.release_date.split("T")[0]}</p>

                <p><strong>Artist:</strong> ${song.Artist ? song.Artist.name : "Unknown Artist"}</p>

                <p><strong>Album:</strong> ${song.Album ? song.Album.title : "No Album"}</p>

                ${isAdmin() ? `
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                ` : ""}
            `;

            if (isAdmin()) {

                songCard.querySelector(".edit-btn").addEventListener("click", () => {

                    editingSongId = song.song_id;

                    document.getElementById("title").value = song.title;
                    document.getElementById("duration").value = song.duration;
                    document.getElementById("release_date").value = song.release_date.split("T")[0];
                    document.getElementById("artist_id").value = song.artist_id;
                    document.getElementById("album_id").value = song.album_id;

                    submitBtn.textContent = "Update Song";

                });

                songCard.querySelector(".delete-btn").addEventListener("click", () => {

                    if (!confirm("Are you sure you want to delete this song?")) return;

                    fetch(`http://localhost:5000/api/songs/${song.song_id}`, {
                        method: "DELETE",
                        headers: getAuthHeaders()
                    })
                    .then(response => response.json())
                    .then(() => loadSongs())
                    .catch(error => console.error(error));

                });

            }

            container.appendChild(songCard);

        });

    })
    .catch(error => console.error(error));

}

// LOAD EVERYTHING WHEN PAGE OPENS
loadArtistsDropdown();
loadAlbumsDropdown();
loadSongs();

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const songData = {
        title: document.getElementById("title").value,
        duration: document.getElementById("duration").value,
        release_date: document.getElementById("release_date").value,
        artist_id: document.getElementById("artist_id").value,
        album_id: document.getElementById("album_id").value
    };

    if (editingSongId === null) {

        fetch("http://localhost:5000/api/songs", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                ...getAuthHeaders()
            },

            body: JSON.stringify(songData)

        })
        .then(response => response.json())
        .then(() => {

            form.reset();
            loadArtistsDropdown();
            loadAlbumsDropdown();
            loadSongs();

        })
        .catch(error => console.error(error));

    } else {

        fetch(`http://localhost:5000/api/songs/${editingSongId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                ...getAuthHeaders()
            },

            body: JSON.stringify(songData)

        })
        .then(response => response.json())
        .then(() => {

            form.reset();
            editingSongId = null;
            submitBtn.textContent = "Add Song";

            loadArtistsDropdown();
            loadAlbumsDropdown();
            loadSongs();

        })
        .catch(error => console.error(error));

    }

});