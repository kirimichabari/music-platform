const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const User = require("./users/user.model");
const Song = require("./songs/song.model");
const Album = require("./albums/album.model");
const Artist = require("./artists/artist.model");
const Playlist = require("./playlists/playlist.model");
const Genre = require("./genres/genre.model");
const SongGenre = require("./songgenres/songgenre.model");
const PlaylistSong = require("./playlistsong/playlistsong.model");
const PlayHistory = require("./playhistory/playhistory.model");
const songgenreRoutes = require("./songgenres/songgenreRoutes");
const genreRoutes = require("./genres/genreRoutes");
const songRoutes = require("./songs/songRoutes");
const userRoutes = require("./users/userRoutes");
const playlistRoutes = require("./playlists/playlistRoutes");
const artistRoutes = require("./artists/artistRoutes");
const albumRoutes = require("./albums/albumRoutes");
const playhistoryRoutes = require("./playhistory/playhistoryRoutes");
const playlistsongRoutes = require("./playlistsong/playlistsongRoutes");
require("./models/associations");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/songs", songRoutes);
app.use("/api/users", userRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/playhistory", playhistoryRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/songgenres", songgenreRoutes);
app.use("/api/playlistsong", playlistsongRoutes);
app.get("/", (req, res) => {
    res.send("KenyaBeats Server Running");
});

const PORT = process.env.PORT || 5000;
sequelize.authenticate()
  .then(() => {
    console.log("MySQL Connected Successfully");
  })
  .catch((err) => {
    console.log("MySQL Connection Error:", err);
  });
sequelize.sync()
  .then(() => {
    console.log("Models synced to database");
  })
  .catch((err) => {
    console.log("Sync error:", err);
  });
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});