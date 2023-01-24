
const {TotalTopicScoresObject , errorObject} = require("./common_schemas")

const fetchTopicsScoreSchema = {
    description: "Obtener el resumen de respuesta correctas por topicos", 
    summary: "Obtener el resumen por topicos", 
    tags: ["topic_score"],
    security: [{ token: [] }],
    response: {
        200: {
            type: "array",
            items: {...TotalTopicScoresObject}
        },
        "4xx": {
            ...errorObject
        }
    }
}

module.exports = {fetchTopicsScoreSchema}