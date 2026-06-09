const Artist = require("./artist.model");

// CREATE ARTIST
const createArtist = async (req, res) => {
    try {
        const artist = await Artist.create(req.body);
        res.status(201).json(artist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL ARTISTS
const getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.json(artists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE ARTIST
const getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id);
        if (!artist) return res.status(404).json({ message: "Artist not found" });
        res.json(artist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE ARTIST
const updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id);
        if (!artist) return res.status(404).json({ message: "Artist not found" });

        await artist.update(req.body);
        res.json(artist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE ARTIST
const deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id);
        if (!artist) return res.status(404).json({ message: "Artist not found" });

        await artist.destroy();
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