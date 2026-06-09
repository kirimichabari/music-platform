const albumService = require("./albumService");

// CREATE ALBUM
const createAlbum = async (req, res) => {
    try {
        const album = await albumService.createAlbum(req.body);
        res.status(201).json(album);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL ALBUMS
const getAllAlbums = async (req, res) => {
    try {
        const albums = await albumService.getAllAlbums();
        res.json(albums);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE ALBUM
const getAlbumById = async (req, res) => {
    try {
        const album = await albumService.getAlbumById(req.params.id);
        if (!album) return res.status(404).json({ message: "Album not found" });
        res.json(album);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE ALBUM
const updateAlbum = async (req, res) => {
    try {
        const album = await albumService.updateAlbum(req.params.id, req.body);
        if (!album) return res.status(404).json({ message: "Album not found" });

        res.json(album);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE ALBUM
const deleteAlbum = async (req, res) => {
    try {
        const result = await albumService.deleteAlbum(req.params.id);
        if (!result) return res.status(404).json({ message: "Album not found" });

        res.json({ message: "Album deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
};