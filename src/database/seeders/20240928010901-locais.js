'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const gymPlaces = [
      {
        nome: 'Academia Brasil Fitness',
        descricao: 'Uma academia completa para todas as suas necessidades de treino.',
        cep: '01311000',
        logradouro: 'Avenida Paulista, 1000',
        municipio: 'São Paulo',
        uf: 'SP',
        latitude: '-23.564',
        longitude: '-46.653',
        linkmap: 'https://goo.gl/maps/someLink1',
        usuarioId: 1, // Adjust this ID based on your user table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Gym Top',
        descricao: 'A melhor academia para musculação e aeróbicos.',
        cep: '01415001',
        logradouro: 'Rua Augusta, 1500',
        municipio: 'São Paulo',
        uf: 'SP',
        latitude: '-23.558',
        longitude: '-46.662',
        linkmap: 'https://goo.gl/maps/someLink2',
        usuarioId: 2, // Adjust this ID based on your user table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Academia Energia',
        descricao: 'Espaço moderno e completo para seu treino diário.',
        cep: '30130100',
        logradouro: 'Avenida Afonso Pena, 800',
        municipio: 'Belo Horizonte',
        uf: 'MG',
        latitude: '-19.921',
        longitude: '-43.937',
        linkmap: 'https://goo.gl/maps/someLink3',
        usuarioId: 3, // Adjust this ID based on your user table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Fitness Rio',
        descricao: 'Uma academia premium no coração do Rio de Janeiro.',
        cep: '20040002',
        logradouro: 'Rua da Assembleia, 200',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        latitude: '-22.908',
        longitude: '-43.176',
        linkmap: 'https://goo.gl/maps/someLink4',
        usuarioId: 4, // Adjust this ID based on your user table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Academia Beira Mar',
        descricao: 'Treinamento com vista para o mar em Fortaleza.',
        cep: '60125000',
        logradouro: 'Avenida Beira Mar, 1200',
        municipio: 'Fortaleza',
        uf: 'CE',
        latitude: '-3.717',
        longitude: '-38.501',
        linkmap: 'https://goo.gl/maps/someLink5',
        usuarioId: 5, // Adjust this ID based on your user table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('locais', gymPlaces, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locais', null, {});
  },
};
