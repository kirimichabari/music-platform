const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PlayHistory = sequelize.define("PlayHistory", {
    play_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    song_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    played_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

module.exports = PlayHistory;