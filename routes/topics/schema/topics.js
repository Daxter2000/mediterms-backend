
const {errorObject, topicObject} = require("./common_schemas")

const fetchAllTopicsSchema = {
    description: "getting_all_topics", 
    summary: "", 
    tags: ["topics"],
    response: {
        200: {
            type: "array",
            items: {...topicObject}
        },
        "4xx": {
            ...errorObject
        }
    }
}

module.exports = {fetchAllTopicsSchema}