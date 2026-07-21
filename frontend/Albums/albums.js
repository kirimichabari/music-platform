console.log("albums.js is running");

checkAuth();

const container = document.getElementById("albums-container");
const form = document.getElementById("album-form");
const submitBtn = document.getElementById("submit-btn");

let editingAlbumId = null;

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

// LOAD ALL ALBUMS
function loadAlbums() {

    fetch("http://localhost:5000/api/albums", {
        method: "GET",
        headers: getAuthHeaders()
    })

    .then(response => response.json())

    .then(albums => {

        container.innerHTML = "";

        albums.forEach(album => {

            const albumCard = document.createElement("div");
            albumCard.classList.add("album-card");

            albumCard.innerHTML = `
                <h3>${album.title}</h3>

                <p><strong>Release Date:</strong> ${album.release_date.split("T")[0]}</p>

                <p><strong>Artist ID:</strong> ${album.artist_id}</p>

                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;

            // EDIT
            albumCard.querySelector(".edit-btn").addEventListener("click", () => {

                editingAlbumId = album.album_id;

                document.getElementById("title").value = album.title;
                document.getElementById("release_date").value = album.release_date.split("T")[0];
                document.getElementById("artist_id").value = album.artist_id;

                submitBtn.textContent = "Update Album";

            });

            // DELETE
            albumCard.querySelector(".delete-btn").addEventListener("click", () => {

                const confirmDelete = confirm("Are you sure you want to delete this album?");

                if (!confirmDelete) return;

                fetch(`http://localhost:5000/api/albums/${album.album_id}`, {

                    method: "DELETE",

                    headers: getAuthHeaders()

                })

                .then(response => response.json())

                .then(() => {

                    loadAlbums();

                })

                .catch(error => console.error(error));

            });

            container.appendChild(albumCard);

        });

    })

    .catch(error => console.error(error));

}

// LOAD PAGE DATA
loadArtistsDropdown();
loadAlbums();

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const albumData = {

        title: document.getElementById("title").value,
        release_date: document.getElementById("release_date").value,
        artist_id: document.getElementById("artist_id").value

    };

    // CREATE
    if (editingAlbumId === null) {

        fetch("http://localhost:5000/api/albums", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                ...getAuthHeaders()
            },

            body: JSON.stringify(albumData)

        })

        .then(response => response.json())

        .then(() => {

            form.reset();

            loadArtistsDropdown();
            loadAlbums();

        })

        .catch(error => console.error(error));

    }

    // UPDATE
    else {

        fetch(`http://localhost:5000/api/albums/${editingAlbumId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                ...getAuthHeaders()
            },

            body: JSON.stringify(albumData)

        })

        .then(response => response.json())

        .then(() => {

            form.reset();

            editingAlbumId = null;

            submitBtn.textContent = "Add Album";

            loadArtistsDropdown();
            loadAlbums();

        })

        .catch(error => console.error(error));

    }

});