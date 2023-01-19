// GENERAL 
const topicObject = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        name: {type: "string"}
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

module.exports = {errorObject, topicObject}