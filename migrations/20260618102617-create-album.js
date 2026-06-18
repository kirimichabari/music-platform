'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Albums', {
      album_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      release_date: {
        type: Sequelize.DATE,
        allowNull: false
      },

      artist_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Albums');
  }
};