'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const terms = 
      [
        {
          "id": 1,
          "term": "Angio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 1
        },
        {
          "id": 2,
          "term": "Anterior",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 2
        },
        {
          "id": 3,
          "term": "Artero",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 3
        },
        {
          "id": 4,
          "term": "Artro ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 4
        },
        {
          "id": 5,
          "term": "Auric",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 5
        },
        {
          "id": 6,
          "term": "Balano",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 6
        },
        {
          "id": 7,
          "term": "Blefaro",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 7
        },
        {
          "id": 8,
          "term": "Braqui ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 8
        },
        {
          "id": 9,
          "term": "Cefalo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 9
        },
        {
          "id": 10,
          "term": "Cervix",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 10
        },
        {
          "id": 11,
          "term": "Cifosis",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 11
        },
        {
          "id": 12,
          "term": "Cisto",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 12
        },
        {
          "id": 13,
          "term": "Colecisto",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 13
        },
        {
          "id": 14,
          "term": "Colon",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 14
        },
        {
          "id": 15,
          "term": "Colpo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 15
        },
        {
          "id": 16,
          "term": "Condro",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 16
        },
        {
          "id": 17,
          "term": "Conjuntiva",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 17
        },
        {
          "id": 18,
          "term": "Core",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 18
        },
        {
          "id": 19,
          "term": "Cox",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 19
        },
        {
          "id": 20,
          "term": "Cutis",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 20
        },
        {
          "id": 21,
          "term": "Dactilo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 21
        },
        {
          "id": 22,
          "term": "Deferen",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 22
        },
        {
          "id": 23,
          "term": "Derma",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 23
        },
        {
          "id": 24,
          "term": "Didimo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 24
        },
        {
          "id": 25,
          "term": "Dorsal",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 25
        },
        {
          "id": 26,
          "term": "Encefalo ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 26
        },
        {
          "id": 27,
          "term": "Endocardio ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 27
        },
        {
          "id": 28,
          "term": "Endometrio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 28
        },
        {
          "id": 29,
          "term": "Entero ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 29
        },
        {
          "id": 30,
          "term": "Epicardio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 30
        },
        {
          "id": 31,
          "term": "Epidermis",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 31
        },
        {
          "id": 32,
          "term": "Epididimo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 32
        },
        {
          "id": 33,
          "term": "Epigastrio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 33
        },
        {
          "id": 34,
          "term": "Falo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 34
        },
        {
          "id": 35,
          "term": "Flebo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 35
        },
        {
          "id": 36,
          "term": "Gastro",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 36
        },
        {
          "id": 37,
          "term": "Gingivo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 37
        },
        {
          "id": 38,
          "term": "Glande",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 38
        },
        {
          "id": 39,
          "term": "Glomerulo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 39
        },
        {
          "id": 40,
          "term": "Gloso",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 40
        },
        {
          "id": 41,
          "term": "Hepato",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 41
        },
        {
          "id": 42,
          "term": "Hipocondrio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 42
        },
        {
          "id": 43,
          "term": "Hipodermis",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 43
        },
        {
          "id": 44,
          "term": "Hipogastrio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 44
        },
        {
          "id": 45,
          "term": "Histerio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 45
        },
        {
          "id": 46,
          "term": "Lordosis",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 46
        },
        {
          "id": 47,
          "term": "Mesogastrio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 47
        },
        {
          "id": 48,
          "term": "Metra",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 48
        },
        {
          "id": 49,
          "term": "Mielo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 49
        },
        {
          "id": 50,
          "term": "Mio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 50
        },
        {
          "id": 51,
          "term": "Miocardio ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 51
        },
        {
          "id": 52,
          "term": "Miring ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 52
        },
        {
          "id": 53,
          "term": "Naso",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 53
        },
        {
          "id": 54,
          "term": "Nefro",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 54
        },
        {
          "id": 55,
          "term": "Neumo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 55
        },
        {
          "id": 56,
          "term": "Neuro",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 56
        },
        {
          "id": 57,
          "term": "Nevo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 57
        },
        {
          "id": 58,
          "term": "Odonto",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 58
        },
        {
          "id": 59,
          "term": "Oftalmo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 59
        },
        {
          "id": 60,
          "term": "Onico",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 60
        },
        {
          "id": 61,
          "term": "Ooforo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 61
        },
        {
          "id": 62,
          "term": "Oro",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 62
        },
        {
          "id": 63,
          "term": "Orqui ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 63
        },
        {
          "id": 64,
          "term": "Oseo, Osteo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 64
        },
        {
          "id": 65,
          "term": "Oto",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 65
        },
        {
          "id": 66,
          "term": "Pericardio ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 66
        },
        {
          "id": 67,
          "term": "Periostio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 67
        },
        {
          "id": 68,
          "term": "Podo",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 68
        },
        {
          "id": 69,
          "term": "Posterior",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 69
        },
        {
          "id": 70,
          "term": "Prepucio ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 70
        },
        {
          "id": 71,
          "term": "Reno",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 71
        },
        {
          "id": 72,
          "term": "Rino",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 72
        },
        {
          "id": 73,
          "term": "Salpinge",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 73
        },
        {
          "id": 74,
          "term": "Telio",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 74
        },
        {
          "id": 75,
          "term": "Tendo, Teno",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 75
        },
        {
          "id": 76,
          "term": "Trico",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 76
        },
        {
          "id": 77,
          "term": "Ureter",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 77
        },
        {
          "id": 78,
          "term": "Uretra ",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 78
        },
        {
          "id": 79,
          "term": "Ventral",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 79
        },
        {
          "id": 80,
          "term": "Vulva",
          "topicId": 1,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 80
        },
        {
          "id": 81,
          "term": "Aneurisma",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 81
        },
        {
          "id": 82,
          "term": "Angina",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 82
        },
        {
          "id": 83,
          "term": "Angiologia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 83
        },
        {
          "id": 84,
          "term": "Angioplastia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 84
        },
        {
          "id": 85,
          "term": "Arritmia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 85
        },
        {
          "id": 86,
          "term": "Arterectomia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 86
        },
        {
          "id": 87,
          "term": "Arteriografia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 87
        },
        {
          "id": 88,
          "term": "Arteritis",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 88
        },
        {
          "id": 89,
          "term": "Arteroesclerosis",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 89
        },
        {
          "id": 90,
          "term": "Bradicardia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 90
        },
        {
          "id": 91,
          "term": "Cardio",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 91
        },
        {
          "id": 92,
          "term": "Cardiomegalia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 92
        },
        {
          "id": 93,
          "term": "Cardiomiopatia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 93
        },
        {
          "id": 94,
          "term": "Cardiopatía ",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 94
        },
        {
          "id": 95,
          "term": "Cardiotomia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 95
        },
        {
          "id": 96,
          "term": "Cianosis",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 96
        },
        {
          "id": 97,
          "term": "Desfibrilacion",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 97
        },
        {
          "id": 98,
          "term": "Dextrocardia",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 98
        },
        {
          "id": 99,
          "term": "Diuresis",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 99
        },
        {
          "id": 100,
          "term": "Ecocardiograma",
          "topicId": 2,
          "createdAt": "2023-01-17 11:55:25",
          "updatedAt": "2023-01-17 13:45:09",
          "termsDefinitionId": 100
        }
      ]
    await queryInterface.bulkInsert('terms',terms, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('terms', null, {}); 
  }
};
