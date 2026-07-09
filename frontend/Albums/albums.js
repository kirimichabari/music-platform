const token = localStorage.getItem("token");

console.log("Token:", token);

fetch("http://localhost:5000/api/albums", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then((response) => {
    console.log("Status:", response.status);
    return response.json();
  })
  .then((albums) => {
    console.log("Albums:", albums);

    const container = document.getElementById("albums-container");

    albums.forEach((album) => {
      const albumCard = document.createElement("div");
      albumCard.classList.add("album-card");

      albumCard.innerHTML = `
        <h3>${album.title}</h3>
        <p>Release Date: ${album.release_date}</p>
        <p>Artist ID: ${album.artist_id}</p>
      `;

      container.appendChild(albumCard);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });