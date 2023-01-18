// GENERAL 
const userResponseSchema = {
    type: 'object',
    properties: {
        token: { type: 'string' },
        user: { 
            type: 'object', 
            properties: {
                name: {type: "string"},
                email: {type: "string"}
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

module.exports = {userResponseSchema, errorObject}
