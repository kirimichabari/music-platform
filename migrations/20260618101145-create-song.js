'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Songs', {
      song_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      release_date: {
        type: Sequelize.DATE,
        allowNull: false
      },

      artist_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      album_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Songs');
  }
};