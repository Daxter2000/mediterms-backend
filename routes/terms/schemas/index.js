


const medicalTermObject = {
    type: 'object',
    properties: {
        term: { type: 'string' },
        options: { 
            type: 'object', 
            properties: {
                definition: { type: "object"},
                correct_answer: {type: "boolean"}
            } 
        }
    }
}

const termJsonSchema = {
    // params: {},
    // body: {},
    response: {
        200: {
            ...medicalTermObject
        },
        "4xx": {
            description: "Response schema for medical terms when error occurs",
            content: {
                'application/json':{
                    schema: {
                        errors: {
                            type: "array",
                            items: { type: "string" }
                        }
                    }
                }
            }
        }
    }
}

const sampleTermsJsonSchema = { 
    ...termJsonSchema, ...{ 
        description: "", 
        summary: "", 
        tags: ["sample_terms"]
        
    }
}

module.exports = {termJsonSchema, sampleTermsJsonSchema}