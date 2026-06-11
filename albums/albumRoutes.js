const express = require("express");
const router = express.Router();

const {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
} =require("./albumController");

router.post("/", createAlbum);
router.get("/", getAllAlbums);
router.get("/:id", getAlbumById);
router.put("/:id", updateAlbum);
router.delete("/:id", deleteAlbum);

module.exports = router;