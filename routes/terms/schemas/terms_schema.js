
const {errorObject, medicalTermObject, TotalAnswersByTopicObject}  = require("./common_schemas")


const fetchIndividualTermSchema = {
    description: "getting_individual_terms", 
    summary: "", 
    tags: ["terms"],
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
    description: "accumulate_correct_terms", 
    summary: "", 
    tags: ["terms"],
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