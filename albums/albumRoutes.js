const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");

const {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
} = require("./albumController");

// CRUD ROUTES
router.post("/", authMiddleware, createAlbum);
router.get("/", authMiddleware, getAllAlbums);
router.get("/:id", authMiddleware, getAlbumById);
router.put("/:id", authMiddleware, updateAlbum);
router.delete("/:id", authMiddleware, deleteAlbum);

module.exports = router;