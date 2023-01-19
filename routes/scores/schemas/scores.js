
const {TotalTopicScoresObject , errorObject} = require("./common_schemas")

const fetchTopicsScoreSchema = {
    description: "fetching_topic_schema", 
    summary: "", 
    tags: ["topic_score"],
    response: {
        200: {
            type: "array",
            items: {...TotalTopicScoresObject}
        },
        "4xx": {
            ...errorObject
        }
    }
}

module.exports = {fetchTopicsScoreSchema}