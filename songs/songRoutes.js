const express = require("express");
const router = express.Router();

const {
    createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
} =require("./songController");

// CRUD ROUTES
router.post("/songs", createSong);
router.get("/songs", getAllSongs);
router.get("/songs/:id", getSongById);
router.put("/songs/:id", updateSong);
router.delete("/songs/:id", deleteSong);

module.exports = router;