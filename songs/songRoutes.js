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
router.post("/", createSong);
router.get("/", getAllSongs);
router.get("/:id", getSongById);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

module.exports = router;