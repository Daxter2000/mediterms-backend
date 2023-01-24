
const {errorObject} = require("./common_schemas")

const validateEmailSchema = {
    description: "Valida el correo electronico para determinar si ya ha sido usado", 
    summary: "Valida el correo electronico", 
    tags: ["user"],
    security: [{ token: [] }],
    query: {
        type: "object",
        required: ["email"],
        properties: {
            email: {type: "string"}
        }
    },
    response: {
        200: {
            type: "object",
            properties: {
                valid: {type: "boolean"}
            }
        },
        "4xx": {
            ...errorObject
        }
    }
}

module.exports = {validateEmailSchema}


