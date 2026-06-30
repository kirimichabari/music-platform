const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");

const {
    createArtist,
    getAllArtists,
    getArtistById,
    updateArtist,
    deleteArtist
} = require("./artistController");

// CRUD ROUTES
router.post("/", authMiddleware, createArtist);
router.get("/", authMiddleware, getAllArtists);
router.get("/:id", authMiddleware, getArtistById);
router.put("/:id", authMiddleware, updateArtist);
router.delete("/:id", authMiddleware, deleteArtist);

module.exports = router;