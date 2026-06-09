const Genre = require("./genre.model");

// CREATE
exports.createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ONE
exports.getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);

    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);

    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    await genre.update(req.body);

    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);

    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    await genre.destroy();

    res.status(200).json({ message: "Genre deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};