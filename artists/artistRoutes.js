const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");
const roleMiddleware = require("../auth/roleMiddleware");

const {
    createArtist,
    getAllArtists,
    getArtistById,
    updateArtist,
    deleteArtist
} = require("./artistController");


// CREATE ARTIST - ADMIN ONLY
router.post("/", authMiddleware, roleMiddleware("admin"), createArtist);


// GET ALL ARTISTS - LOGGED IN USERS
router.get("/", authMiddleware, getAllArtists);


// GET ONE ARTIST - LOGGED IN USERS
router.get("/:id", authMiddleware, getArtistById);


// UPDATE ARTIST - ADMIN ONLY
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateArtist);


// DELETE ARTIST - ADMIN ONLY
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteArtist);


module.exports = router;