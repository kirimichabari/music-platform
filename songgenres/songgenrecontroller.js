const SongGenre = require("./songgenre.model");

// CREATE
exports.createSongGenre = async (req, res) => {
  try {
    const data = await SongGenre.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
exports.getAllSongGenres = async (req, res) => {
  try {
    const data = await SongGenre.findAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ONE (optional but useful)
exports.getSongGenreById = async (req, res) => {
  try {
    const data = await SongGenre.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteSongGenre = async (req, res) => {
  try {
    await SongGenre.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};