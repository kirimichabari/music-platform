const Song = require("./song.model");

// CREATE SONG
const createSong = async (data) => {
    return await Song.create(data);
};

// GET ALL SONGS
const getAllSongs = async () => {
    return await Song.findAll();
};

// GET ONE SONG
const getSongById = async (id) => {
    return await Song.findByPk(id);
};

// UPDATE SONG
const updateSong = async (id, data) => {
    const song = await Song.findByPk(id);
    if (!song) return null;

    await song.update(data);
    return song;
};

// DELETE SONG
const deleteSong = async (id) => {
    const song = await Song.findByPk(id);
    if (!song) return null;

    await song.destroy();
    return true;
};

module.exports = {
    createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
};