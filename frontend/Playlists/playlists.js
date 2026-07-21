console.log("playlists.js is running");

checkAuth();

const container = document.getElementById("playlists-container");
const form = document.getElementById("playlist-form");
const submitBtn = document.getElementById("submit-btn");

let editingPlaylistId = null;

// LOAD ALL PLAYLISTS
function loadPlaylists() {

    fetch("http://localhost:5000/api/playlists", {
        method: "GET",
        headers: getAuthHeaders()
    })

    .then(response => response.json())

    .then(playlists => {

        container.innerHTML = "";

        playlists.forEach(playlist => {

            const playlistCard = document.createElement("div");
            playlistCard.classList.add("playlist-card");

            playlistCard.innerHTML = `
                <h3>${playlist.name}</h3>

                <p><strong>User ID:</strong> ${playlist.user_id}</p>

                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;

            // EDIT
            playlistCard.querySelector(".edit-btn").addEventListener("click", () => {

                editingPlaylistId = playlist.playlist_id;

                document.getElementById("name").value = playlist.name;
                document.getElementById("user_id").value = playlist.user_id;

                submitBtn.textContent = "Update Playlist";

            });

            // DELETE
            playlistCard.querySelector(".delete-btn").addEventListener("click", () => {

                const confirmDelete = confirm("Are you sure you want to delete this playlist?");

                if (!confirmDelete) return;

                fetch(`http://localhost:5000/api/playlists/${playlist.playlist_id}`, {

                    method: "DELETE",

                    headers: getAuthHeaders()

                })

                .then(response => response.json())

                .then(() => {

                    loadPlaylists();

                })

                .catch(error => console.error(error));

            });

            container.appendChild(playlistCard);

        });

    })

    .catch(error => console.error(error));

}

// LOAD PLAYLISTS WHEN PAGE OPENS
loadPlaylists();

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const playlistData = {

        name: document.getElementById("name").value,
        user_id: document.getElementById("user_id").value

    };

    // CREATE
    if (editingPlaylistId === null) {

        fetch("http://localhost:5000/api/playlists", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                ...getAuthHeaders()
            },

            body: JSON.stringify(playlistData)

        })

        .then(response => response.json())

        .then(() => {

            form.reset();

            loadPlaylists();

        })

        .catch(error => console.error(error));

    }

    // UPDATE
    else {

        fetch(`http://localhost:5000/api/playlists/${editingPlaylistId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                ...getAuthHeaders()
            },

            body: JSON.stringify(playlistData)

        })

        .then(response => response.json())

        .then(() => {

            form.reset();

            editingPlaylistId = null;

            submitBtn.textContent = "Add Playlist";

            loadPlaylists();

        })

        .catch(error => console.error(error));

    }

});