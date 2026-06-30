const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");

const {
    createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
} = require("./songController");

// CRUD ROUTES
router.post("/", authMiddleware, createSong);
router.get("/", authMiddleware, getAllSongs);
router.get("/:id", authMiddleware, getSongById);
router.put("/:id", authMiddleware, updateSong);
router.delete("/:id", authMiddleware, deleteSong);

module.exports = router;