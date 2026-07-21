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


// CREATE PLAYLIST - LOGGED IN USERS
router.post("/", authMiddleware, createPlaylist);


// GET ALL PLAYLISTS - LOGGED IN USERS
router.get("/", authMiddleware, getAllPlaylists);


// GET ONE PLAYLIST - LOGGED IN USERS
router.get("/:id", authMiddleware, getPlaylistById);


// UPDATE PLAYLIST - LOGGED IN USERS
router.put("/:id", authMiddleware, updatePlaylist);


// DELETE PLAYLIST - LOGGED IN USERS
router.delete("/:id", authMiddleware, deletePlaylist);


module.exports = router;