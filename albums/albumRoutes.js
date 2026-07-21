const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");
const roleMiddleware = require("../auth/roleMiddleware");

const {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
} = require("./albumController");


// CREATE ALBUM - ADMIN ONLY
router.post("/", authMiddleware, roleMiddleware("admin"), createAlbum);


// GET ALL ALBUMS - LOGGED IN USERS
router.get("/", authMiddleware, getAllAlbums);


// GET ONE ALBUM - LOGGED IN USERS
router.get("/:id", authMiddleware, getAlbumById);


// UPDATE ALBUM - ADMIN ONLY
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateAlbum);


// DELETE ALBUM - ADMIN ONLY
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteAlbum);


module.exports = router;