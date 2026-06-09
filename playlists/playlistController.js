const playlistService = require("./playlistService");

// CREATE PLAYLIST
const createPlaylist = async (req, res) => {
    try {
        const playlist = await playlistService.createPlaylist(req.body);
        res.status(201).json(playlist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL PLAYLISTS
const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await playlistService.getAllPlaylists();
        res.json(playlists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE PLAYLIST
const getPlaylistById = async (req, res) => {
    try {
        const playlist = await playlistService.getPlaylistById(req.params.id);
        if (!playlist) return res.status(404).json({ message: "Playlist not found" });
        res.json(playlist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE PLAYLIST
const updatePlaylist = async (req, res) => {
    try {
        const playlist = await playlistService.updatePlaylist(req.params.id, req.body);
        if (!playlist) return res.status(404).json({ message: "Playlist not found" });

        res.json(playlist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE PLAYLIST
const deletePlaylist = async (req, res) => {
    try {
        const result = await playlistService.deletePlaylist(req.params.id);
        if (!result) return res.status(404).json({ message: "Playlist not found" });

        res.json({ message: "Playlist deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createPlaylist,
    getAllPlaylists,
    getPlaylistById,
    updatePlaylist,
    deletePlaylist
};