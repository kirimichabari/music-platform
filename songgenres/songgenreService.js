const SongGenre = require("./songgenre.model");

// CREATE
const createSongGenre = async (data) => {
    return await SongGenre.create(data);
};

// GET ALL
const getAllSongGenres = async () => {
    return await SongGenre.findAll();
};

// DELETE (composite key)
const deleteSongGenre = async (song_id, genre_id) => {
    return await SongGenre.destroy({
        where: {
            song_id,
            genre_id
        }
    });
};

module.exports = {
    createSongGenre,
    getAllSongGenres,
    deleteSongGenre
};