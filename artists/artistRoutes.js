const express = require("express");
const router = express.Router();

const {
    createArtist,
    getAllArtists,
    getArtistById,
    updateArtist,
    deleteArtist
} = require("./artistController");

// ✅ FIXED ROUTES
router.post("/", createArtist);
router.get("/", getAllArtists);
router.get("/:id", getArtistById);
router.put("/:id", updateArtist);
router.delete("/:id", deleteArtist);

module.exports = router;