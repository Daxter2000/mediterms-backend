const {handleCommonErrors, } = require("#utils/controllers/index")
const {literal, Op} = require("sequelize")

const fetchIndividualTerm =  async function(request, reply, fastify){
    const Term = fastify.db.term
    const TermsDefinition = fastify.db.terms_definition

    const {previousIds, topicId} = request.query
    
    try {
        let whereClause = {}
        if(previousIds != undefined && previousIds != null)
            whereClause["id"] = {[Op.notIn]: JSON.parse(previousIds)}
    
        if(topicId != undefined && topicId != null)
            whereClause["topicId"] = parseInt(topicId)
    
        let termObject = {}
        // OBTENER LA PREGUNTA
        const termsRecord = await Term.findAll({
            where: {...whereClause},
            include: {
                model: TermsDefinition,
                required: true,
                attributes: ["id", "definition"]
            },
            order: literal('rand()'), 
            limit: 1,
            attributes: ["id","term", "topicId"],
            raw: true,
            nest: true,
        })

        if(termsRecord.length === 0)
          return reply.status(400).send({ code: "MDT_DB_OUT_BOUNDARIES", errors: ["El topico id o los ids enviados no existen"]})

        const termTopic = termsRecord[0]["topicId"]
        const termId = termsRecord[0].terms_definition["id"]

        //OBTENER LAS RESPUESTAS
        const answerRecords = await TermsDefinition.findAll({
            where: {
                id: { [Op.ne]: termId },
            },
            include: {
                model: Term,
                required: true,
                where: {
                    topicId: termTopic
                }
            },
            order: literal('rand()'), 
            limit: 2,
            attributes: ["id", "definition"],
            raw: true,
            nest: true
        })

        // Deconstruncting the object
        const termRecord = termsRecord[0]
        termObject = {...termRecord, ...{definitions: [{...termRecord.terms_definition, ...{answer: termRecord.terms_definition.definition, correct_answer: true}}]}}
        answerRecords.map((answer) => {
            delete answer["term"]
            termObject.definitions.push({...answer, answer: answer.definition, correct_answer: false})
        })
        delete termObject["terms_definition"]
        termObject["definitions"] = termObject["definitions"].sort((a, b) => 0.5 - Math.random());

        return reply.send(termObject)

    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

const addToTopicCounter = async function(request, reply, fastify){
    const TotalAnswersByTopic = fastify.db.total_answers_by_topic

    const {topicId} = request.params
    const {UserRecord} = await fastify.getUserId(fastify, request)
    const userId = UserRecord.id

    try {
        const currentSummaryRecord = await TotalAnswersByTopic.findAll({
            where: {userId, topicId},
            raw: true
        })
        const extraFields = {}

        let currentSummary = 0
        if(currentSummaryRecord.length > 0){
            extraFields.id = currentSummaryRecord[0].id
            currentSummary = currentSummaryRecord[0].answerSummary
        }

        const [newRecord, created] = await TotalAnswersByTopic.upsert({
            userId: userId,
            topicId: topicId,
            answerSummary: currentSummary + 1,
            ...extraFields
        });
        
        return reply.send(newRecord)
    } catch (e) {
        return reply.status(400).send({ ...handleCommonErrors(e) })
    }   
}

module.exports = { fetchIndividualTerm, addToTopicCounter}