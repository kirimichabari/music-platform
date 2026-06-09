const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Artist = sequelize.define("Artist", {
    artist_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    bio: {
        type: DataTypes.TEXT
    },

    country: {
        type: DataTypes.STRING
    }
});

module.exports = Artist;