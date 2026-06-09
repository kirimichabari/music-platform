const PlaylistSong = require("./playlistsong.model");

// ADD SONG TO PLAYLIST
const addSongToPlaylist = async (data) => {
    return await PlaylistSong.create(data);
};

// GET ALL
const getAllPlaylistSongs = async () => {
    return await PlaylistSong.findAll();
};

// REMOVE SONG FROM PLAYLIST
const removeSongFromPlaylist = async (id) => {
    const deleted = await PlaylistSong.destroy({
        where: { id }
    });

    return deleted; // number of rows deleted
};

module.exports = {
    addSongToPlaylist,
    getAllPlaylistSongs,
    removeSongFromPlaylist
};