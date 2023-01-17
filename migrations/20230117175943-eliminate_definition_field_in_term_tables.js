'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('terms', 'definition')
    await queryInterface.removeColumn('sample_terms', 'definition')
  },
  async down (queryInterface, Sequelize) {
    
  }
};
