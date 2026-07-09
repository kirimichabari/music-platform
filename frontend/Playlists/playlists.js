const token = localStorage.getItem("token");

console.log("Token:", token);

fetch("http://localhost:5000/api/playlists", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then((response) => {
    console.log("Status:", response.status);
    return response.json();
  })
  .then((playlists) => {
    console.log("Playlists:", playlists);

    const container = document.getElementById("playlists-container");

    playlists.forEach((playlist) => {
      const playlistCard = document.createElement("div");
      playlistCard.classList.add("playlist-card");

      playlistCard.innerHTML = `
        <h3>${playlist.name}</h3>
        <p>User ID: ${playlist.user_id}</p>
      `;

      container.appendChild(playlistCard);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });