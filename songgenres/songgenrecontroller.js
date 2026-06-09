const songGenreService = require("./songgenreService");

// CREATE
exports.createSongGenre = async (req, res) => {
    try {
        const data = await songGenreService.createSongGenre(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL
exports.getAllSongGenres = async (req, res) => {
    try {
        const data = await songGenreService.getAllSongGenres();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ONE
exports.getSongGenreById = async (req, res) => {
    try {
        const data = await songGenreService.getSongGenreById(req.params.id);

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
        const deleted = await songGenreService.deleteSongGenre(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};