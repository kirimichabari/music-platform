const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const SongGenre = sequelize.define("SongGenre", {
  song_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = SongGenre;