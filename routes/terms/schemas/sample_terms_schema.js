
const {errorObject, sampleMedicalTermObject} = require("./common_schemas")

const fetchSampleTermsSchema = {
    description: "getting_sampling_terms", 
    summary: "", 
    tags: ["sample_terms"],
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