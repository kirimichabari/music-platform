const express = require("express");
const router = express.Router();

const controller = require("./songgenreController");

// CREATE
router.post("/", controller.createSongGenre);

// GET ALL
router.get("/", controller.getAllSongGenres);

// GET ONE
router.get("/:id", controller.getSongGenreById);

// DELETE
router.delete("/:id", controller.deleteSongGenre);

module.exports = router;