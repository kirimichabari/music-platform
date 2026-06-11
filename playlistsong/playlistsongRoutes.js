const express = require("express");
const router = express.Router();

const controller = require("./playlistsongController");

// CREATE
router.post("/", controller.addSongToPlaylist);

// GET ALL
router.get("/", controller.getAllPlaylistSongs);

// DELETE (IMPORTANT — current version we are fixing)
router.delete("/:playlist_id/:song_id", controller.removeSongFromPlaylist);

module.exports = router;