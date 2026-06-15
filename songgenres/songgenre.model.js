const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const SongGenre = sequelize.define("SongGenre", {
    song_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    genre_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = SongGenre;