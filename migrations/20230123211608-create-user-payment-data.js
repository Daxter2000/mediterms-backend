'use strict';
const { timestamp } = require("../utils/models/db_timestamps")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_payment_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
         model: "users",
         key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }, 
      expirationMonths: {
        type: Sequelize.INTEGER,
        allowNull: false 
      },
      stripeTransaction_id:{
        type: Sequelize.STRING,
        allowNull: false
      },
      subscription_date: {
        type: Sequelize.DATE
      },
      ...timestamp
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_payment_data');
  }
};