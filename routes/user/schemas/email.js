
const {errorObject} = require("./common_schemas")

const validateEmailSchema = {
    description: "reset_password", 
    summary: "", 
    tags: ["user"],
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


