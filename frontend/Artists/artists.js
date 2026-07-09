const token = localStorage.getItem("token");

console.log("Token:", token);

fetch("http://localhost:5000/api/artists", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then((response) => {
    console.log("Status:", response.status);
    return response.json();
  })
  .then((artists) => {
    console.log("Artists:", artists);

    const container = document.getElementById("artists-container");

    artists.forEach((artist) => {
      const artistCard = document.createElement("div");
      artistCard.classList.add("artist-card");

      artistCard.innerHTML = `
        <h3>${artist.name}</h3>
        <p>${artist.bio}</p>
        <p>Country: ${artist.country}</p>
      `;

      container.appendChild(artistCard);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });