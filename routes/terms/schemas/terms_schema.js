
const {errorObject, medicalTermObject, TotalAnswersByTopicObject}  = require("./common_schemas")


const fetchIndividualTermSchema = {
    description: "Obtiene los terminos uno por uno, de acuerdo al topic id", 
    summary: "Obtener los terminos uno por uno", 
    tags: ["terms"],
    security: [{ token: [] }],
    querystring: {
        type: 'object',
        properties: {
            topicId: { type: 'string' },
            previousIds: { type: 'array', items: {type: "string"}}
        }
    },
    response: {
        200: {
            ...medicalTermObject
        },
        "4xx": {
            ...errorObject
        }
    }
}

const addToTopicCounterSchema = {
    description: "Aumentar el contador por topico de acuerdo con usuario", 
    summary: "Aumentar el contador por topico", 
    tags: ["terms"],
    security: [{ token: [] }],
    params: {
        type: 'object',
        properties: {
            topicId: { type: 'string' },
        }
    },
    response: {
        200: {
            ...TotalAnswersByTopicObject
        },
        "4xx": {
            ...errorObject
        }
    }
}

module.exports = {fetchIndividualTermSchema, addToTopicCounterSchema }