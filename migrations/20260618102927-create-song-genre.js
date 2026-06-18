'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SongGenres', {
      song_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },

      genre_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('SongGenres');
  }
};