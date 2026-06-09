const Playlist = require("./playlist.model");

// CREATE PLAYLIST
const createPlaylist = async (data) => {
    return await Playlist.create(data);
};

// GET ALL PLAYLISTS
const getAllPlaylists = async () => {
    return await Playlist.findAll();
};

// GET ONE PLAYLIST
const getPlaylistById = async (id) => {
    return await Playlist.findByPk(id);
};

// UPDATE PLAYLIST
const updatePlaylist = async (id, data) => {
    const playlist = await Playlist.findByPk(id);
    if (!playlist) return null;

    await playlist.update(data);
    return playlist;
};

// DELETE PLAYLIST
const deletePlaylist = async (id) => {
    const playlist = await Playlist.findByPk(id);
    if (!playlist) return null;

    await playlist.destroy();
    return true;
};

module.exports = {
    createPlaylist,
    getAllPlaylists,
    getPlaylistById,
    updatePlaylist,
    deletePlaylist
};