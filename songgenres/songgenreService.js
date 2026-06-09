const SongGenre = require("./songgenre.model");

// CREATE
const createSongGenre = async (data) => {
    return await SongGenre.create(data);
};

// GET ALL
const getAllSongGenres = async () => {
    return await SongGenre.findAll();
};

// GET ONE
const getSongGenreById = async (id) => {
    return await SongGenre.findByPk(id);
};

// DELETE
const deleteSongGenre = async (id) => {
    const deleted = await SongGenre.destroy({
        where: { id }
    });

    return deleted; // returns number of rows deleted
};

module.exports = {
    createSongGenre,
    getAllSongGenres,
    getSongGenreById,
    deleteSongGenre
};