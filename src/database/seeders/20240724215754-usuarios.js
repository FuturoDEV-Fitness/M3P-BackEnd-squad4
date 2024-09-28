"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("usuarios", [
      {
        nome: "Maria",
        cpf: "22222222222",
        dataNascimento: new Date("2000-01-01"),
        email: "maria@example.com",
        password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        confirma_password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        cep: "12345678",
        logradouro: "Rua das Flores",
        municipio: "São Paulo",
        uf: "SP",
        createdAt: new Date("2024-07-22 13:00:00"),
        updatedAt: new Date("2024-07-22 13:00:00"),
      },
      {
        nome: "Douglas",
        cpf: "33333333333",
        dataNascimento: new Date("2000-01-01"),
        email: "douglas@example.com",
        password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        confirma_password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        cep: "12345678",
        logradouro: "Rua das Flores",
        municipio: "São Paulo",
        uf: "SP",
        createdAt: new Date("2024-07-22 13:00:00"),
        updatedAt: new Date("2024-07-22 13:00:00"),
      },
      {
        nome: "Thalles",
        cpf: "44444444444",
        dataNascimento: new Date("2000-01-01"),
        email: "thalles@example.com",
        password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        confirma_password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        cep: "12345678",
        logradouro: "Rua das Flores",
        municipio: "São Paulo",
        uf: "SP",
        createdAt: new Date("2024-07-22 13:00:00"),
        updatedAt: new Date("2024-07-22 13:00:00"),
      },
      {
        nome: "Alana",
        cpf: "55555555555",
        dataNascimento: new Date("2000-01-01"),
        email: "alana@example.com",
        password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        confirma_password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        cep: "12345678",
        logradouro: "Rua das Flores",
        municipio: "Rio de Janeiro",
        uf: "RJ",
        createdAt: new Date("2024-07-22 13:00:00"),
        updatedAt: new Date("2024-07-22 13:00:00"),
      },
      {
        nome: "Frank",
        cpf: "66666666666",
        dataNascimento: new Date("2000-01-01"),
        email: "frank@example.com",
        password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        confirma_password_hash:
          "$2a$10$MahaPiRuoWb1uYiBeh6zXOrDv8HnOgBOa9TR3gvJdEhHSPqQXvWWO",
        cep: "12345678",
        logradouro: "Rua das Flores",
        municipio: "Rio de Janeiro",
        uf: "RJ",
        createdAt: new Date("2024-07-22 13:00:00"),
        updatedAt: new Date("2024-07-22 13:00:00"),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
