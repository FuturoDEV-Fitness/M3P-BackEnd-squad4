'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('locais', 'numeroCasa', {
      type: Sequelize.INTEGER,
      allowNull: false
    });

    await queryInterface.addColumn('locais', 'complemento', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('locais', 'numeroCasa');
    await queryInterface.removeColumn('locais', 'complemento');
  }
};
