const Album = require("./album.model");

// CREATE ALBUM
const createAlbum = async (req, res) => {
    try {
        const album = await Album.create(req.body);
        res.status(201).json(album);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL ALBUMS
const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.findAll();
        res.json(albums);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE ALBUM
const getAlbumById = async (req, res) => {
    try {
        const album = await Album.findByPk(req.params.id);
        if (!album) return res.status(404).json({ message: "Album not found" });
        res.json(album);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE ALBUM
const updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByPk(req.params.id);
        if (!album) return res.status(404).json({ message: "Album not found" });

        await album.update(req.body);
        res.json(album);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE ALBUM
const deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findByPk(req.params.id);
        if (!album) return res.status(404).json({ message: "Album not found" });

        await album.destroy();
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