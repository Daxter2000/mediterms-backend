
const {userResponseSchema, errorObject} = require("./common_schemas")

const signInSchema = {
    description: "Acceder a la aplicacion con correo y password", 
    summary: "Acceder a la aplicacion", 
    tags: ["login"],
    body: {
        type: "object",
        required: ["email", "password"],
        properties: {
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

module.exports  ={signInSchema}