'use strict';
const {literal } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_payment_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subscription_date:{
        type: Sequelize.DATE
      },
      payment_status: {
        type: Sequelize.ENUM("pending", "paid", "cancelled"),
        defaultValue: "pending"
      },
      expiration_time: {
        type: Sequelize.INTEGER
      },
      userId:{
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: literal("CURRENT_TIMESTAMP(3)"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: literal("CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_payment_data');
  }
};