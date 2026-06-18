'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PlaylistSongs', {
      playlist_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },

      song_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('PlaylistSongs');
  }
};