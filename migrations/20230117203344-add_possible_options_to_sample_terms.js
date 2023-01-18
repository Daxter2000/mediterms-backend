'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('sample_terms', 'definition_1', Sequelize.STRING)
    await queryInterface.addColumn('sample_terms', 'definition_2', Sequelize.STRING)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('sample_terms', 'definition_1')
    await queryInterface.removeColumn('sample_terms', 'definition_2')
  }
};
