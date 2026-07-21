const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");
const roleMiddleware = require("../auth/roleMiddleware");

const genreController = require("./genrecontroller");


// CREATE GENRE - ADMIN ONLY
router.post("/", authMiddleware, roleMiddleware("admin"), genreController.createGenre);


// READ ALL GENRES - LOGGED IN USERS
router.get("/", authMiddleware, genreController.getAllGenres);


// READ ONE GENRE - LOGGED IN USERS
router.get("/:id", authMiddleware, genreController.getGenreById);


// UPDATE GENRE - ADMIN ONLY
router.put("/:id", authMiddleware, roleMiddleware("admin"), genreController.updateGenre);


// DELETE GENRE - ADMIN ONLY
router.delete("/:id", authMiddleware, roleMiddleware("admin"), genreController.deleteGenre);


module.exports = router;