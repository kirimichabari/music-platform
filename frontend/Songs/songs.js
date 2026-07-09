console.log("songs.js is running");

const token = localStorage.getItem("token");

fetch("http://localhost:5000/api/songs", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then((response) => response.json())
  .then((songs) => {
    console.log("Songs:", songs);

    const container = document.getElementById("songs-container");

    songs.forEach((song) => {
      const songCard = document.createElement("div");
      songCard.classList.add("song-card");

      songCard.innerHTML = `
        <h3>${song.title}</h3>
        <p>Duration: ${song.duration} minutes</p>
        <p>Release Date: ${song.release_date}</p>
      `;

      container.appendChild(songCard);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });