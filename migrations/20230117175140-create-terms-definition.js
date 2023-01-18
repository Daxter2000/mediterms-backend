'use strict';
const { timestamp } = require("../utils/models/db_timestamps")

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('terms_definitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      definition: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      ...timestamp
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('terms_definitions');
  }
};