const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");
const roleMiddleware = require("../auth/roleMiddleware");

const controller = require("./songgenreController");


// CREATE SONG GENRE - ADMIN ONLY
router.post("/", authMiddleware, roleMiddleware("admin"), controller.createSongGenre);


// GET ALL SONG GENRES - LOGGED IN USERS
router.get("/", authMiddleware, controller.getAllSongGenres);


// DELETE SONG GENRE - ADMIN ONLY
router.delete(
    "/:song_id/:genre_id",
    authMiddleware,
    roleMiddleware("admin"),
    controller.deleteSongGenre
);


module.exports = router;