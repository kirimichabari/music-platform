const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");
const controller = require("./songgenreController");

// CREATE
router.post("/", authMiddleware, controller.createSongGenre);

// GET ALL
router.get("/", authMiddleware, controller.getAllSongGenres);

// DELETE (composite key)
router.delete("/:song_id/:genre_id", authMiddleware, controller.deleteSongGenre);

module.exports = router;