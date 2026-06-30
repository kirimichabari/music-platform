const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");

const {
    createPlaylist,
    getAllPlaylists,
    getPlaylistById,
    updatePlaylist,
    deletePlaylist
} = require("./playlistController");

// CRUD ROUTES
router.post("/", authMiddleware, createPlaylist);
router.get("/", authMiddleware, getAllPlaylists);
router.get("/:id", authMiddleware, getPlaylistById);
router.put("/:id", authMiddleware, updatePlaylist);
router.delete("/:id", authMiddleware, deletePlaylist);

module.exports = router;