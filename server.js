const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
require("dotenv").config();

require("./models/associations");

const songgenreRoutes = require("./songgenres/songgenreRoutes");
const genreRoutes = require("./genres/genreRoutes");
const songRoutes = require("./songs/songRoutes");
const userRoutes = require("./users/userRoutes");
const playlistRoutes = require("./playlists/playlistRoutes");
const artistRoutes = require("./artists/artistRoutes");
const albumRoutes = require("./albums/albumRoutes");
const playhistoryRoutes = require("./playhistory/playhistoryRoutes");
const playlistsongRoutes = require("./playlistsong/playlistsongRoutes");
const authRoutes = require("./auth/authRoutes");

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
app.use("/api/auth", authRoutes);

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});