
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
            type: "object",
            properties: {
                success: {type: "boolean"}
            }
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
        required: ["newPassword", "confirmedPassword", "password"],
        properties: {
            newPassword: {type: "string"},
            password: {type: "string"},
            confirmedPassword: {type: "string"},
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

const saveNewPasswordSchema = {
    description: "change_password", 
    summary: "", 
    tags: ["user"],
    body: {
        type: "object",
        required: ["newPassword", "confirmedPassword", "tokenPassword"],
        properties: {
            newPassword: {type: "string"},
            confirmedPassword: {type: "string"},
            tokenPassword: {type: "string"}
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


module.exports = {changePasswordSchema, resetPasswordSchema, saveNewPasswordSchema}
