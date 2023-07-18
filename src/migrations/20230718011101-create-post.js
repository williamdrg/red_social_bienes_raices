'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
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
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      typePostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'type_post_id'
      },
      typePropertyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'type_property_id'
      },
      locationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'location_id'
      },
      price: {
        type: Sequelize.REAL,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id'
      },
      statePost: {
        type: Sequelize.BOOLEAN,
        field: 'state_post'
      },
      isActived: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: 'is_actived'
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
    await queryInterface.dropTable('posts');
  }
};