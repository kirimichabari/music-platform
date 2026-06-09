const express = require("express");
const router = express.Router();

const {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
} =require("./albumController");

router.post("/albums", createAlbum);
router.get("/albums", getAllAlbums);
router.get("/albums/:id", getAlbumById);
router.put("/albums/:id", updateAlbum);
router.delete("/albums/:id", deleteAlbum);

module.exports = router;