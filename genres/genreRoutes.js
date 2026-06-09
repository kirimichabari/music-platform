const express = require("express");
const router = express.Router();

const genreController = require("./genrecontroller");

// CREATE
router.post("/", genreController.createGenre);

// READ ALL
router.get("/", genreController.getAllGenres);

// READ ONE
router.get("/:id", genreController.getGenreById);

// UPDATE
router.put("/:id", genreController.updateGenre);

// DELETE
router.delete("/:id", genreController.deleteGenre);

module.exports = router;