// GENERAL 
const medicalTermObject = {
    type: 'object',
    properties: {
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

module.export = {errorObject, medicalTermObject}