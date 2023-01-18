
const {errorObject, medicalTermObject} = require("./common_schemas")

const getSampleTermsSchema = {
    description: "getting_sampling_terms", 
    summary: "", 
    tags: ["sample_terms"],
    response: {
        200: {
            type: "array",
            items: {...medicalTermObject}
        },
        "4xx": {
            ...errorObject
        }
    }
}

module.exports = {getSampleTermsSchema}