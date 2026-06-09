const genreService = require("./genreService");

// CREATE
exports.createGenre = async (req, res) => {
    try {
        const genre = await genreService.createGenre(req.body);
        res.status(201).json(genre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL
exports.getAllGenres = async (req, res) => {
    try {
        const genres = await genreService.getAllGenres();
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ONE
exports.getGenreById = async (req, res) => {
    try {
        const genre = await genreService.getGenreById(req.params.id);

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
        const genre = await genreService.updateGenre(req.params.id, req.body);

        if (!genre) {
            return res.status(404).json({ message: "Genre not found" });
        }

        res.status(200).json(genre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE
exports.deleteGenre = async (req, res) => {
    try {
        const result = await genreService.deleteGenre(req.params.id);

        if (!result) {
            return res.status(404).json({ message: "Genre not found" });
        }

        res.status(200).json({ message: "Genre deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};