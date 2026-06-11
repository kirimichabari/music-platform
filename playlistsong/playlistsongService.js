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
const removeSongFromPlaylist = async (playlistId, songId) => {
    return await PlaylistSong.destroy({
        where: {
            playlist_id: playlistId,
            song_id: songId
        }
    });
};

module.exports = {
    addSongToPlaylist,
    getAllPlaylistSongs,
    removeSongFromPlaylist
};