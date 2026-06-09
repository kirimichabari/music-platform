const express = require("express");
const router = express.Router();

const {
    createPlaylist,
    getAllPlaylists,
    getPlaylistById,
    updatePlaylist,
    deletePlaylist
} = require("./playlistController");

// CRUD ROUTES
router.post("/playlists", createPlaylist);
router.get("/playlists", getAllPlaylists);
router.get("/playlists/:id", getPlaylistById);
router.put("/playlists/:id", updatePlaylist);
router.delete("/playlists/:id", deletePlaylist);

module.exports = router;