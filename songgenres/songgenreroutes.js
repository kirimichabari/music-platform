const express = require("express");
const router = express.Router();

const controller = require("./songgenreController");

// CREATE
router.post("/", controller.createSongGenre);

// GET ALL
router.get("/", controller.getAllSongGenres);

// DELETE (composite key)
router.delete("/:song_id/:genre_id", controller.deleteSongGenre);

module.exports = router;