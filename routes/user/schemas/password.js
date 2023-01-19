
const {userResponseSchema, errorObject} = require("./common_schemas")

const resetPasswordSchema = {
    description: "reset_password", 
    summary: "", 
    tags: ["user"],
    body: {
        type: "object",
        required: ["email"],
        properties: {
            email: {type: "string"}
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

const changePasswordSchema = {
    description: "change_password", 
    summary: "", 
    tags: ["user"],
    body: {
        type: "object",
        required: ["newPassword", "password"],
        properties: {
            newPassword: {type: "string"},
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

module.exports = {changePasswordSchema, resetPasswordSchema}
