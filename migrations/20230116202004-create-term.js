'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('terms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      term: {
        type: Sequelize.STRING,
        allowNull: false
      },
      definition: {
        type: Sequelize.STRING,
        allowNull: false
      },
      topicId: {
        type: Sequelize.INTEGER,
        references: {
         model: "topics",
         key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('terms');
  }
};