const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");
const genreController = require("./genrecontroller");

// CREATE
router.post("/", authMiddleware, genreController.createGenre);

// READ ALL
router.get("/", authMiddleware, genreController.getAllGenres);

// READ ONE
router.get("/:id", authMiddleware, genreController.getGenreById);

// UPDATE
router.put("/:id", authMiddleware, genreController.updateGenre);

// DELETE
router.delete("/:id", authMiddleware, genreController.deleteGenre);

module.exports = router;