const express = require("express");
const router = express.Router();

const controller = require("./playlistsongController");

// ADD SONG
router.post("/", controller.addSongToPlaylist);

// GET ALL
router.get("/", controller.getAllPlaylistSongs);

// DELETE
router.delete("/:id", controller.removeSongFromPlaylist);

module.exports = router;