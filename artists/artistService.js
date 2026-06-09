const Artist = require("./artist.model");

// CREATE ARTIST
const createArtist = async (data) => {
    return await Artist.create(data);
};

// GET ALL ARTISTS
const getAllArtists = async () => {
    return await Artist.findAll();
};

// GET ONE ARTIST
const getArtistById = async (id) => {
    return await Artist.findByPk(id);
};

// UPDATE ARTIST
const updateArtist = async (id, data) => {
    const artist = await Artist.findByPk(id);
    if (!artist) return null;

    await artist.update(data);
    return artist;
};

// DELETE ARTIST
const deleteArtist = async (id) => {
    const artist = await Artist.findByPk(id);
    if (!artist) return null;

    await artist.destroy();
    return true;
};

module.exports = {
    createArtist,
    getAllArtists,
    getArtistById,
    updateArtist,
    deleteArtist
};