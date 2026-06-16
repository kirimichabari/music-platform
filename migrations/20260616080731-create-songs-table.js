'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      duration: {
        type: Sequelize.INTEGER
      },

      albumId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Albums',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      artistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Artists',
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Songs');
  }
};