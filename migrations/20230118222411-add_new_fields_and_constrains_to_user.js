'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',  'token', { type: Sequelize.TEXT,}
    );

    await queryInterface.addConstraint('users', {
      fields: ['email'],
      type: 'unique',
      name: 'email_constraint_users'
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'users',  'token'
    );
    await queryInterface.removeConstraint('users', 'email_constraint_users')
  }
};
