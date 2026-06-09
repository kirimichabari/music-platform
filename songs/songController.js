const Song = require("./song.model");

// CREATE SONG
const createSong = async (req, res) => {
    try {
        const song = await Song.create(req.body);
        res.status(201).json(song);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL SONGS
const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.json(songs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE SONG
const getSongById = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) return res.status(404).json({ message: "Song not found" });
        res.json(song);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE SONG
const updateSong = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) return res.status(404).json({ message: "Song not found" });

        await song.update(req.body);
        res.json(song);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE SONG
const deleteSong = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) return res.status(404).json({ message: "Song not found" });

        await song.destroy();
        res.json({ message: "Song deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
};