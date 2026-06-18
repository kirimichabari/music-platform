'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Artists', {
      artist_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      bio: {
        type: Sequelize.TEXT
      },

      country: {
        type: Sequelize.STRING
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Artists');
  }
};