'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('playlistSong', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      playlistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'playlists',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      songId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'songs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      engine: 'InnoDB'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('playlistSong');
  }
};