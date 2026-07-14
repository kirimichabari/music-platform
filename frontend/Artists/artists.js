console.log("artists.js is running");

const token = localStorage.getItem("token");
const container = document.getElementById("artists-container");
const form = document.getElementById("artist-form");
const submitBtn = document.getElementById("submit-btn");

let editingArtistId = null;

// LOAD ALL ARTISTS
function loadArtists() {

    fetch("http://localhost:5000/api/artists", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    .then(response => response.json())

    .then(artists => {

        container.innerHTML = "";

        artists.forEach(artist => {

            const artistCard = document.createElement("div");
            artistCard.classList.add("artist-card");

            artistCard.innerHTML = `
                <h3>${artist.name}</h3>

                <p><strong>Country:</strong> ${artist.country}</p>

                <p><strong>Bio:</strong> ${artist.bio}</p>

                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;

            // EDIT
            artistCard.querySelector(".edit-btn").addEventListener("click", () => {

                editingArtistId = artist.artist_id;

                document.getElementById("name").value = artist.name;
                document.getElementById("country").value = artist.country;
                document.getElementById("bio").value = artist.bio;

                submitBtn.textContent = "Update Artist";

            });

            // DELETE
            artistCard.querySelector(".delete-btn").addEventListener("click", () => {

                const confirmDelete = confirm("Are you sure you want to delete this artist?");

                if (!confirmDelete) return;

                fetch(`http://localhost:5000/api/artists/${artist.artist_id}`, {

                    method: "DELETE",

                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                })

                .then(response => response.json())

                .then(() => {

                    loadArtists();

                })

                .catch(error => console.error(error));

            });

            container.appendChild(artistCard);

        });

    })

    .catch(error => console.error(error));

}

// LOAD ARTISTS WHEN PAGE OPENS
loadArtists();

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const artistData = {

        name: document.getElementById("name").value,
        country: document.getElementById("country").value,
        bio: document.getElementById("bio").value

    };

    // CREATE
    if (editingArtistId === null) {

        fetch("http://localhost:5000/api/artists", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(artistData)

        })

        .then(response => response.json())

        .then(() => {

            form.reset();

            loadArtists();

        })

        .catch(error => console.error(error));

    }

    // UPDATE
    else {

        fetch(`http://localhost:5000/api/artists/${editingArtistId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(artistData)

        })

        .then(response => response.json())

        .then(() => {

            form.reset();

            editingArtistId = null;

            submitBtn.textContent = "Add Artist";

            loadArtists();

        })

        .catch(error => console.error(error));

    }

});