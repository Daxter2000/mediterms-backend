'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const topics =[
        {
          "id": 1,
          "name": "Anatomia general",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 2,
          "name": "Cardiovascular",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 3,
          "name": "Dermatología",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 4,
          "name": "Endocrinología",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 5,
          "name": "Gastroenterología",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 6,
          "name": "Ginecología",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 7,
          "name": "Infectología",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 8,
          "name": "Laboratorio y Gabinete",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 9,
          "name": "Nefrología y Urología",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 10,
          "name": "Neumologia",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 11,
          "name": "Neurología",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 12,
          "name": "Oftalmología",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 13,
          "name": "Oncología",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 14,
          "name": "Ortopedia",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 15,
          "name": "Otorrinolaringologia",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 16,
          "name": "Prefijos",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 17,
          "name": "Signos y Sintomas",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 18,
          "name": "Subfijos",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        },
        {
          "id": 19,
          "name": "Termino Hospitalario",
          "topicOrder": 0,
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "0000-00-00 00:00:00"
        }
      ]
    
    await queryInterface.bulkInsert('topics',topics, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('topics', null, {}); 
  }
};
