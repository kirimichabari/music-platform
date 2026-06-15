const playlistSongService = require("./playlistsongService");

// ADD SONG TO PLAYLIST
exports.addSongToPlaylist = async (req, res) => {
    try {
        const data = await playlistSongService.addSongToPlaylist(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL
exports.getAllPlaylistSongs = async (req, res) => {
    try {
        const data = await playlistSongService.getAllPlaylistSongs();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// REMOVE SONG FROM PLAYLIST
exports.removeSongFromPlaylist = async (req, res) => {
    const { playlist_id, song_id } = req.params;

    try {
        const deleted = await playlistSongService.removeSongFromPlaylist(
            playlist_id,
            song_id
        );

        if (!deleted) {
            return res.status(404).json({ message: "Not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};