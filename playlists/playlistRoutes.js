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
router.post("/", createPlaylist);
router.get("/", getAllPlaylists);
router.get("/:id", getPlaylistById);
router.put("/:id", updatePlaylist);
router.delete("/:id", deletePlaylist);

module.exports = router;