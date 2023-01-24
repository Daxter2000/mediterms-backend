
const {userResponseSchema, errorObject} = require("./common_schemas")

const resetPasswordSchema = {
    description: "Recuperar la contraseña a traves del correo electronico", 
    summary: "Recuperar la contraseña", 
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
    description: "Cambiar la contraseña dentro de la aplicacion", 
    summary: "Cambiar la contraseña", 
    tags: ["user"],
    security: [{ token: [] }],
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
    description: "Cambiar contraseña cuando se accede desde el codigo enviado al correo", 
    summary: "Cambiar contraseña con codigo", 
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
