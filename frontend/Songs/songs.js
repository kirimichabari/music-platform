console.log("songs.js is running");

checkAuth();

const container = document.getElementById("songs-container");
const form = document.getElementById("song-form");
const submitBtn = document.getElementById("submit-btn");

let editingSongId = null;

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

                <p><strong>Artist ID:</strong> ${song.artist_id}</p>

                <p><strong>Album ID:</strong> ${song.album_id}</p>

                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;

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

            container.appendChild(songCard);

        });

    })
    .catch(error => console.error(error));

}

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
                "Authorization": "Bearer " + getToken()
            },

            body: JSON.stringify(songData)

        })
        .then(response => response.json())
        .then(() => {

            form.reset();
            loadSongs();

        });

    } else {

        fetch(`http://localhost:5000/api/songs/${editingSongId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken()
            },

            body: JSON.stringify(songData)

        })
        .then(response => response.json())
        .then(() => {

            form.reset();
            editingSongId = null;
            submitBtn.textContent = "Add Song";
            loadSongs();

        });

    }

});