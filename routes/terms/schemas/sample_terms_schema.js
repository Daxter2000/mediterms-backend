
const {errorObject, sampleMedicalTermObject} = require("./common_schemas")

const fetchSampleTermsSchema = {
    description: "getting_sampling_terms", 
    summary: "", 
    tags: ["sample_terms"],
    response: {
        200: {
            type: "array",
            items: {...sampleMedicalTermObject}
        },
        "4xx": {
            ...errorObject
        }
    }
}

module.exports = {fetchSampleTermsSchema}