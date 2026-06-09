const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PlaylistSong = sequelize.define("PlaylistSong", {
    playlist_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    song_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});

module.exports = PlaylistSong;