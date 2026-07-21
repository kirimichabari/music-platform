const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");
const roleMiddleware = require("../auth/roleMiddleware");

const {
    createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
} = require("./songController");


// CREATE SONG - ADMIN ONLY
router.post("/", authMiddleware, roleMiddleware("admin"), createSong);


// GET SONGS - LOGGED IN USERS
router.get("/", authMiddleware, getAllSongs);


// GET ONE SONG - LOGGED IN USERS
router.get("/:id", authMiddleware, getSongById);


// UPDATE SONG - ADMIN ONLY
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateSong);


// DELETE SONG - ADMIN ONLY
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteSong);


module.exports = router;
