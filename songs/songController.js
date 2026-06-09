const songService = require("./songService");

// CREATE SONG
const createSong = async (req, res) => {
    try {
        const song = await songService.createSong(req.body);
        res.status(201).json(song);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL SONGS
const getAllSongs = async (req, res) => {
    try {
        const songs = await songService.getAllSongs();
        res.json(songs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE SONG
const getSongById = async (req, res) => {
    try {
        const song = await songService.getSongById(req.params.id);
        if (!song) return res.status(404).json({ message: "Song not found" });
        res.json(song);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE SONG
const updateSong = async (req, res) => {
    try {
        const song = await songService.updateSong(req.params.id, req.body);
        if (!song) return res.status(404).json({ message: "Song not found" });

        res.json(song);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE SONG
const deleteSong = async (req, res) => {
    try {
        const result = await songService.deleteSong(req.params.id);
        if (!result) return res.status(404).json({ message: "Song not found" });

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