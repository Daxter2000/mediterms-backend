const {handleCommonErrors, } = require("#utils/controllers/index")


const fetchAllTopics =  async function(request, reply, fastify){
    const Topic = fastify.db.topic

    try {
        const sampleTopicRecords = await Topic.findAll({
            attributes: ["id", "name"],
            raw: true,
        })

        return reply.send(sampleTopicRecords)
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

module.exports = { fetchAllTopics}