const Playlist = require("./playlist.model");
const User = require("../users/user.model");
const Song = require("../songs/song.model");

// CREATE PLAYLIST
const createPlaylist = async (data) => {
    return await Playlist.create(data);
};

// GET ALL PLAYLISTS
const getAllPlaylists = async () => {
    return await Playlist.findAll({
        include: [
            {
                model: User,
                attributes: ["user_id", "username"]
            },
            {
                model: Song,
                attributes: ["song_id", "title"]
            }
        ]
    });
};

// GET ONE PLAYLIST
const getPlaylistById = async (id) => {
    return await Playlist.findByPk(id, {
        include: [
            {
                model: User,
                attributes: ["user_id", "username"]
            },
            {
                model: Song,
                attributes: ["song_id", "title"]
            }
        ]
    });
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