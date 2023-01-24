
const {errorObject, topicObject} = require("./common_schemas")

const fetchAllTopicsSchema = {
    description: "Obtiene todos los topicos de la base de datos", 
    summary: "Obtener los topicos", 
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