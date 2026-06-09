const Album = require("./album.model");

// CREATE ALBUM
const createAlbum = async (data) => {
    return await Album.create(data);
};

// GET ALL ALBUMS
const getAllAlbums = async () => {
    return await Album.findAll();
};

// GET ONE ALBUM
const getAlbumById = async (id) => {
    return await Album.findByPk(id);
};

// UPDATE ALBUM
const updateAlbum = async (id, data) => {
    const album = await Album.findByPk(id);
    if (!album) return null;

    await album.update(data);
    return album;
};

// DELETE ALBUM
const deleteAlbum = async (id) => {
    const album = await Album.findByPk(id);
    if (!album) return null;

    await album.destroy();
    return true;
};

module.exports = {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
};