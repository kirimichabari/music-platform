const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Song = sequelize.define("Song", {
    song_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    release_date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    album_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Song;