const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Playlist = sequelize.define("Playlist", {
    playlist_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
         },
         
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Playlist;