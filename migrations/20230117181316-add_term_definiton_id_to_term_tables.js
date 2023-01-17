'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'terms', // name of Source model
      'termsDefinitionId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'terms_definitions', // name of Target model
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'terms', // name of Source model
      'termsDefinitionId' // key we want to remove
    );
  }
};
