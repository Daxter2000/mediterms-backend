
const {userResponseSchema, errorObject} = require("./common_schemas")

const signInSchema = {
    description: "sign_up_schema", 
    summary: "", 
    tags: ["sign_up"],
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