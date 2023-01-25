const errorObject = {
    type: "object",
    properties: {
        errors: {
            type: "array",
            items: {
                type: "string"
            }
        },
        code: { type: "string" },
        statusCode: { type: "string" }
    }
}

const clientSecretObject = {
    type: 'object',
            properties: {
                secret_client: { type: 'string' },
            },
}

module.exports = { errorObject, clientSecretObject }