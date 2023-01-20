// GENERAL 
const sampleMedicalTermObject = {
    type: 'object',
    properties: {
        id: {type: "string"},
        term: { type: 'string' },
        definitions: { 
            type: 'array', 
            items: {
                type: "object",
                properties: {
                    id: {type: "integer"},
                    answer: {type: "string"},
                    correct_answer: {type: "boolean"}
                }
            } 
        }
    }
}

const medicalTermObject = {
    type: 'object',
    properties: {
        id: {type: "integer"},
        term: { type: 'string' },
        topicId: {type: "integer"},
        definitions: { 
            type: 'array', 
            items: {
                type: "object",
                properties: {
                    id: {type: "integer"},
                    answer: {type: "string"},
                    correct_answer: {type: "boolean"}
                }
            } 
        }
    }
}

const TotalAnswersByTopicObject = {
    type: 'object',
    properties: {
        answerSummary: {type: "integer"},
        userId: {type: "integer"},
        topicId: {type: "integer"}
    }
}

const errorObject = {
    type: "object",
    properties: {
        errors: {
            type: "array",
            items: {
                type: "string"
            }
        },
        code: {type: "string"},
        statusCode: {type: "string"}
    }
}

module.exports = {errorObject, medicalTermObject, sampleMedicalTermObject, TotalAnswersByTopicObject}