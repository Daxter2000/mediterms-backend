

const {handleCommonErrors, } = require("#utils/controllers/index")


const fetchTopicsScore =  async function(request, reply, fastify){
    const TotalAnswers = fastify.db.total_answers_by_topic
    const Topics = fastify.db.topic
    
    const {UserRecord} = await fastify.getUserId(fastify, request)
    const userId = UserRecord.id

    try {
        let totalScoreJson = []

        const totalScoreRows = await TotalAnswers.findAll({
          where: {
            userId: userId
          },
          include: {
            model: Topics,
            attributes: ["id", "name"]
          },
          attributes: ["answerSummary", "id"],
          raw: true,
          nest: true
        })
        let total = 0
        totalScoreRows.map((row) => {
            total += row.answerSummary
            totalScoreJson.push({"total": row.answerSummary, "id": row.topic.id, "topic_name": row.topic.name })
        })
        totalScoreJson.push({"total": total, "id": 0, "topic_name": "Total" })

        return reply.send(totalScoreJson)
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

module.exports = { fetchTopicsScore}