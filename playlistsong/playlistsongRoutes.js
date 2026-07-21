const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");

const controller = require("./playlistsongController");


// ADD SONG TO PLAYLIST - LOGGED IN USERS
router.post("/", authMiddleware, controller.addSongToPlaylist);


// GET ALL PLAYLIST SONGS - LOGGED IN USERS
router.get("/", authMiddleware, controller.getAllPlaylistSongs);


// REMOVE SONG FROM PLAYLIST - LOGGED IN USERS
router.delete(
    "/:playlist_id/:song_id",
    authMiddleware,
    controller.removeSongFromPlaylist
);


module.exports = router;