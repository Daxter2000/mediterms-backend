'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const sampleTerms = 
      [
        {
          "id": 1,
          "term": "Oto",
          "termsDefinitionId": 65,
          "definition_1": "Etim: Ojo",
          "definition_2": "Etim: Ocho",
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "2023-01-17 13:50:17"
        },
        {
          "id": 2,
          "term": "itis",
          "termsDefinitionId": 539,
          "definition_1": "Etim: Dolor",
          "definition_2": "Etim: Infeccion",
          "createdAt": "0000-00-00 00:00:00",
          "updatedAt": "2023-01-17 13:52:00"
        },
        {
          "id": 3,
          "term": "algia",
          "termsDefinitionId": 524,
          "definition_1": "Etim: Inflamacion",
          "definition_2": "Etim: Infeccion",
          "createdAt": "2023-01-17 13:42:32",
          "updatedAt": "2023-01-17 13:54:41"
        },
        {
          "id": 4,
          "term": "Otalgia",
          "termsDefinitionId": 408,
          "definition_1": "Etim: Dolor en el ojo",
          "definition_2": "Etim: inflamacion en el oido",
          "createdAt": "2023-01-17 13:42:57",
          "updatedAt": "2023-01-17 13:57:02"
        },
        {
          "id": 5,
          "term": "Otitis",
          "termsDefinitionId": 409,
          "definition_1": "Etim. Dolor en el oido",
          "definition_2": "Etim: Inflamacion del ojo",
          "createdAt": "2023-01-17 13:43:35",
          "updatedAt": "2023-01-17 13:57:19"
        }
      ]
    await queryInterface.bulkInsert('sample_terms',sampleTerms, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sample_terms', null, {}); 
  }
};
