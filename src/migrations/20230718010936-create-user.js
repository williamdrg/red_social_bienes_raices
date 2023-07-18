'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING(30)
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(20),
        unique: true
      },
      locationId: {
        type: Sequelize.INTEGER,
        field: 'location_id'
      },
      avatar: {
        type: Sequelize.TEXT,
        defaultValue: 'image'
      },
      isValid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: 'is_valid'
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
    await queryInterface.dropTable('users');
  }
};