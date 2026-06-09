const artistService = require("./artistService");

// CREATE ARTIST
const createArtist = async (req, res) => {
    try {
        const artist = await artistService.createArtist(req.body);
        res.status(201).json(artist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL ARTISTS
const getAllArtists = async (req, res) => {
    try {
        const artists = await artistService.getAllArtists();
        res.json(artists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE ARTIST
const getArtistById = async (req, res) => {
    try {
        const artist = await artistService.getArtistById(req.params.id);
        if (!artist) return res.status(404).json({ message: "Artist not found" });
        res.json(artist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE ARTIST
const updateArtist = async (req, res) => {
    try {
        const artist = await artistService.updateArtist(req.params.id, req.body);
        if (!artist) return res.status(404).json({ message: "Artist not found" });

        res.json(artist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE ARTIST
const deleteArtist = async (req, res) => {
    try {
        const result = await artistService.deleteArtist(req.params.id);
        if (!result) return res.status(404).json({ message: "Artist not found" });

        res.json({ message: "Artist deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createArtist,
    getAllArtists,
    getArtistById,
    updateArtist,
    deleteArtist
};
