const express = require("express");
const router = express.Router();
const artistController = require("./artistController");
const {
    createArtist,
    getAllArtists,
    getArtistById,
    updateArtist,
    deleteArtist
} = require("./artistController")

router.post("/artists", createArtist);
router.get("/artists", getAllArtists);
router.get("/artists/:id", getArtistById);
router.put("/artists/:id", updateArtist);
router.delete("/artists/:id", deleteArtist);

module.exports = router;