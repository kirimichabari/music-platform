const Song = require("./song.model");
const Artist = require("../artists/artist.model");
const Album = require("../albums/album.model");

// CREATE SONG
const createSong = async (data) => {
    return await Song.create(data);
};

// GET ALL SONGS
const getAllSongs = async () => {
    return await Song.findAll({
        include: [
            {
                model: Artist,
                as: "Artist",
                attributes: ["artist_id", "name"]
            },
            {
                model: Album,
                as: "Album",
                attributes: ["album_id", "title"]
            }
        ]
    });
};

// GET ONE SONG
const getSongById = async (id) => {
    return await Song.findByPk(id, {
        include: [
            {
                model: Artist,
                as: "Artist",
                attributes: ["artist_id", "name"]
            },
            {
                model: Album,
                as: "Album",
                attributes: ["album_id", "title"]
            }
        ]
    });
};

// UPDATE SONG
const updateSong = async (id, data) => {
    const song = await Song.findByPk(id);
    if (!song) return null;

    await song.update(data);

    return await Song.findByPk(id, {
        include: [
            {
                model: Artist,
                as: "Artist",
                attributes: ["artist_id", "name"]
            },
            {
                model: Album,
                as: "Album",
                attributes: ["album_id", "title"]
            }
        ]
    });
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