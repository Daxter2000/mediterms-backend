

const TotalTopicScoresObject = {
    type: 'object',
    properties: {
        total: {type: "integer"},
        id: {type: "integer"},
        topic_name: {type: "string"}
    }
}

const errorObject = {
    type: "object",
    properties: {
        errors: {
            type: "array",
            items: {
                type: "string"
            }
        },
        code: {type: "string"},
        statusCode: {type: "string"}
    }
}

module.exports = {errorObject , TotalTopicScoresObject}