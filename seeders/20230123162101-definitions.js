'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const definitionTerms = [
      {
        "id": 1,
        "definition": "Etim: Vaso Sanguineo",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:27:29.474"
      },
      {
        "id": 2,
        "definition": "Clin: Enfrente ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 3,
        "definition": "Etim: Arteria",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 4,
        "definition": "Etim: Articulacion",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 5,
        "definition": "Etim: Oreja",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 6,
        "definition": "Etim: Glande",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 7,
        "definition": "Etim: Parpado",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 8,
        "definition": "Etim: Brazo ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 9,
        "definition": "Etim: Cabeza",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 10,
        "definition": "Etim: Cuello",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 11,
        "definition": "Etim: Condicion de curvatura. Clin: Curvatura normal de la columna vertebral en la region dorsal y sacra",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 12,
        "definition": "Etim: Vejiga ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 13,
        "definition": "Etim: Vejiga con bilis. Clin: Vesicula Biliar",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 14,
        "definition": "Clin: Intestino grueso",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 15,
        "definition": "Etim: Vagina",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 16,
        "definition": "Etim: Cartilago",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 17,
        "definition": "Clin: Membrana transparente que cubre la cara posterior de los párpados y la parte anterior del globo del ojo",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 18,
        "definition": "Etim: Pupila",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 19,
        "definition": "Etim: Cadera",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 20,
        "definition": "Etim: Piel",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 21,
        "definition": "Etim: Dedo",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 22,
        "definition": "Etim: Vaso deferente ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 23,
        "definition": "Etim: Piel",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 24,
        "definition": "Etim: Testiculo",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 25,
        "definition": "Clin: Detras",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 26,
        "definition": "Etim: Dentro de la cabeza. Clin: Estructuras anatomicas del sistema nervioso central que se encuentran dentro de la cabeza",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 27,
        "definition": "Etim: Dentro del Corazon. Clin: Tejido que reviste las cavidades y valvulas cardiacas",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 28,
        "definition": "Etim: Dentro del utero. Clin: Revestimiento interno del útero que se desprende durante la menstruacion",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 29,
        "definition": "Clin: Intestino",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 30,
        "definition": "Etim: Sobre el corazon. Clin: Membrana delgada que cubre la superficie exterior del corazon.",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 31,
        "definition": "Etim: Encima de la piel. Clin: Capa mas superficial de la piel compuesta por queratina",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 32,
        "definition": "Etim: Encima del testiculo. Clin: Órgano situado en el borde posterior del testículo en donde maduran los espermatozoides",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 33,
        "definition": "Etim: Encima del estomago. Clin: Region anatomica del abdomen superior desde el esternon hasta el ombligo ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 34,
        "definition": "Etim: Pene",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 35,
        "definition": "Etim: Vena",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 36,
        "definition": "Etim: Estomago",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 37,
        "definition": "Etim: Encia",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 38,
        "definition": "Clin: Parte final y más abultada del pene.",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 39,
        "definition": "Clin: Unidad anatómica y funcional del riñon",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 40,
        "definition": "Etim: Lengua",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 41,
        "definition": "Etim: Higado",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 42,
        "definition": "Etim: Debajo del cartilago. Clin: Region anatomica del abdomen debajo de los cartilagos costales",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 43,
        "definition": "Etim: Debajo de la piel. Clin: Capa mas profunda de la piel",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 44,
        "definition": "Etim: Debajo del estomago. Clin: Region anatomica del abdomen bajo desde el ombligo hasta el pubis",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 45,
        "definition": "Etim: Utero",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 46,
        "definition": "Etim: Condicion de curvatura. Clin: Curvatura normal de la columna vertebral en la region cervical y lumbar",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 47,
        "definition": "Etim: Estomago de enmedio. Clin: Region anatomica del abdomen medio que rodea el ombligo",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 48,
        "definition": "Etim: Utero (Matriz)",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 49,
        "definition": "Etim: Médula",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 50,
        "definition": "Etim: Músculo ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 51,
        "definition": "Etim: Musculo del corazon. Clin: Region anatomica del corazon compuesta de musculo",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 52,
        "definition": "Etim: Timpano",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 53,
        "definition": "Etim: Nariz",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 54,
        "definition": "Etim: Riñon",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 55,
        "definition": "Etim: Pulmon",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 56,
        "definition": "Etim: Nervio",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 57,
        "definition": "Etim: Lunar",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 58,
        "definition": "Etim: Diente",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 59,
        "definition": "Etim: Ojo",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 60,
        "definition": "Etim: Uña",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 61,
        "definition": "Etim: Ovario",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 62,
        "definition": "Etim: Boca",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 63,
        "definition": "Etim: Testiculo ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 64,
        "definition": "Etim: Hueso.",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 65,
        "definition": "Etim: Oido",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 66,
        "definition": "Etim: Alrededor del Corazon. Clin: Saco fibroso que contiene al corazon en su interior",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 67,
        "definition": "Etim: Alrededor del hueso. Clin: Membrana de tejido conjuntivo que envuelve los huesos.",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 68,
        "definition": "Etim: Pie",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 69,
        "definition": "Clin: Detras",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 70,
        "definition": "Clin: Pliegue de piel que cubre el extremo del pene",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 71,
        "definition": "Etim: Riñon",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 72,
        "definition": "Etim: Nariz",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 73,
        "definition": "Etim: Trompa de falopio",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 74,
        "definition": "\"Etim: Mama",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 11:40:26.267"
      },
      {
        "id": 75,
        "definition": "Etim: Tendon",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 76,
        "definition": "Etim: Pelo ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 77,
        "definition": "Clin: Tubos por dónde la orina pasa de los riñones a la vejiga ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 78,
        "definition": "Clin: Tubo por el cual la orina sale al exterior ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 79,
        "definition": "Clin: Enfrente ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 80,
        "definition": "Clin: Parte que rodea y constituye la abertura externa de la vagina.",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 81,
        "definition": "Etim: Dilatacion. Clin: Protuberancia anormal o dilatación en las paredes de un vaso sanguíneo",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 82,
        "definition": "\"Etim: Ahogar",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 11:40:26.267"
      },
      {
        "id": 83,
        "definition": "Etim: Estudio de vasos sanguineos. Clin: Especialidad medica que estudia el sistema vascular y sus enfermedades",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 84,
        "definition": "Etim: Reconstruccion de un vaso sanguineo. Clin: Procedimiento invasivo que consiste en inflar y desinflar un pequeño globo dentro de una vaso sanguineo",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 85,
        "definition": "Etim: Sin ritmo. Clin: Alteracion del ritmo cardiaco",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 86,
        "definition": "Etim: Cortar haca afuera una arteria. Clin. Extripacion de la arteria ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 87,
        "definition": "Etim: Descripcion de arteria. Clin: Estudio de rayos X donde se inyecta medio de contraste en las arterias para estudiarlas.",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 88,
        "definition": "Etim: Inflamacion de la arteria. ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 89,
        "definition": "Etim: Endurecimiento de arterias. Clin: Patologia donde se acumula placa en las paredes de las arterias endureciendolas y obstruyendolas",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 90,
        "definition": "Etim: Corazón lento. Clin: Frecuencia cardiaca baja",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 91,
        "definition": "Etim: Corazon  ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 92,
        "definition": "Etim: Crecimiento del corazon. Clin: Agrandamiento del corazon por una enfermedad subyacente como presión arterial alta",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 93,
        "definition": "Etim: Enfermedad del musculo del corazon. Clin: Patologia cardiaca que produce un deterioro del músculo y su capacidad de bombeo.",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 94,
        "definition": "Etim: Enfermedad del corazon ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 95,
        "definition": "Etim: Corte del corazón. Clin: Incision quirurgica en el corazon",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 96,
        "definition": "Etim: Condicion Azul. Clin: Coloración azul de la piel causada por una falta de oxígeno en la sangre.",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 97,
        "definition": "Etim: Sin fibrilacion. Clin: Procedimiento donde se restablece el ritmo cardíaco normal mediante la administración de una descarga eléctrica.",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 98,
        "definition": "Etim: Corazon a la derecha. Clin: Condición en la que el vértice del corazón se dirige hacia el lado derecho del tórax",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 99,
        "definition": "Etim: Condicion de orina atravesando. Clin: Produccion de orina y accion de orinar",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 100,
        "definition": "Etim: Descripcion del coraozon con sonido. Clin: Estudio de imagen (Ultrasonido) del corazon",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
      },
      {
        "id": 101,
        "definition": "Etim: Descripcion de la electricidad del corazon. Clin. Representación visual de la actividad eléctrica del corazón ",
        "createdAt": "2023-01-17 11:40:26.267",
        "updatedAt": "2023-01-17 14:29:54.370"
    },
    {
      "id": 539,
      "definition": "Etim: Inflamación",
      "createdAt": "2023-01-17 11:40:26.267",
      "updatedAt": "2023-01-17 14:29:54.370"
    },
    {
      "id": 408,
      "definition": "Etim: Dolor en el oido ",
      "createdAt": "2023-01-17 11:40:26.267",
      "updatedAt": "2023-01-17 14:29:54.370"
    },
    {
      "id": 409,
      "definition": "Etim: Inflamacion del oido. Clin: Transtorno donde el oido interno se inflama por una infeccion",
      "createdAt": "2023-01-17 11:40:26.267",
      "updatedAt": "2023-01-17 14:29:54.370"
    },
    {
      "id": 524,
      "definition": "Etim: Dolor ",
      "createdAt": "2023-01-17 11:40:26.267",
      "updatedAt": "2023-01-17 14:29:54.370"
    }
  ]
  
    await queryInterface.bulkInsert('terms_definitions',definitionTerms, {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('terms_definitions', null, {}); 
  }
};
