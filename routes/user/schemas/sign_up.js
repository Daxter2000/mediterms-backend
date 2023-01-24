
const {userResponseSchema, errorObject} = require("./common_schemas")

const signUpSchema = {
    description: "Registrarse a la aplicacion", 
    summary: "Registrarse a la aplicacion ", 
    tags: ["Register/signing up"],
    body: {
        type: "object",
        required: ["name", "email", "password"],
        properties: {
            name: {type: "string"},
            email: {type: "string"},
            password: {type: "string"}
        }
    },
    response: {
        200: {
            ...userResponseSchema
        },
        "4xx": {
            ...errorObject
        }
    }
}

module.exports = {signUpSchema}