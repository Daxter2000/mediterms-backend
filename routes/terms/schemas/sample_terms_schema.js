
const {errorObject, sampleMedicalTermObject} = require("./common_schemas")

const fetchSampleTermsSchema = {
    description: "Obtiene los cinco terminos de prueba que aparecen al inicio", 
    summary: "Obtener los terminos de prueba", 
    tags: ["terms"],
    querystring: {
        type: 'object',
        properties: {
            previousIds: { type: 'array', items: {type: "string"}}
        }
    },
    response: {
        200: {
            ...sampleMedicalTermObject
        },
        "4xx": {
            ...errorObject
        }
    }
}

module.exports = {fetchSampleTermsSchema}