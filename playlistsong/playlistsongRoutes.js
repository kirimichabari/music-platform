const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");
const controller = require("./playlistsongController");

// CREATE
router.post("/", authMiddleware, controller.addSongToPlaylist);

// GET ALL
router.get("/", authMiddleware, controller.getAllPlaylistSongs);

// DELETE
router.delete("/:playlist_id/:song_id", authMiddleware, controller.removeSongFromPlaylist);

module.exports = router;