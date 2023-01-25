const { errorObject, clientSecretObject} = require("./commonSchemas")

const ClientSecretSchema = {
    description: "Crear Client secret   ",
    summary: "Crear client secret - stripe",
    tags: ["Payment/create-payment-intent"],
    response: {
        200: {
            ...clientSecretObject
        },
        "4xx": {
            ...errorObject
        }
    },
}

module.exports = { ClientSecretSchema }

