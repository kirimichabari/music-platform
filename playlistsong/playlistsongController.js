const PlaylistSong = require("./playlistsong.model");

// ADD SONG TO PLAYLIST
exports.addSongToPlaylist = async (req, res) => {
  try {
    const data = await PlaylistSong.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
exports.getAllPlaylistSongs = async (req, res) => {
  try {
    const data = await PlaylistSong.findAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// REMOVE SONG FROM PLAYLIST
exports.removeSongFromPlaylist = async (req, res) => {
  try {
    await PlaylistSong.destroy({
      where: { id: req.params.id }
    });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};