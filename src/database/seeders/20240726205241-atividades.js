'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('atividades', [
      {
        nomeAtividade: 'Surf',
        descricao: 'Surf na praia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeAtividade: 'Skate',
        descricao: 'Skate na praia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeAtividade: 'Ciclismo',
        descricao: 'Ciclismo na praia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeAtividade: 'Natação',
        descricao: 'Natação na praia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeAtividade: 'Corrida',
        descricao: 'Corrida na praia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeAtividade: 'Caminhada',
        descricao: 'Caminhada na praia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeAtividade: 'Futebol',
        descricao: 'Futebol',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('atividades', null, {})
  }
};
