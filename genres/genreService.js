const Genre = require("./genre.model");

// CREATE
const createGenre = async (data) => {
    return await Genre.create(data);
};

// GET ALL
const getAllGenres = async () => {
    return await Genre.findAll();
};

// GET ONE
const getGenreById = async (id) => {
    return await Genre.findByPk(id);
};

// UPDATE
const updateGenre = async (id, data) => {
    const genre = await Genre.findByPk(id);
    if (!genre) return null;

    await genre.update(data);
    return genre;
};

// DELETE
const deleteGenre = async (id) => {
    const genre = await Genre.findByPk(id);
    if (!genre) return null;

    await genre.destroy();
    return true;
};

module.exports = {
    createGenre,
    getAllGenres,
    getGenreById,
    updateGenre,
    deleteGenre
};