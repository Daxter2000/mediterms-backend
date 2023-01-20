const {handleCommonErrors, } = require("#utils/controllers/index")
const {Op, where} = require("sequelize")

const fetchSampleTerms =  async function(request, reply, fastify){
    const SampleTerm = fastify.db.sample_term
    const TermsDefinition = fastify.db.terms_definition

    const {previousIds} = request.query
    let whereClause = {}
    try {
        let sampleTermsJson = {}

        if(previousIds != undefined && previousIds != null)
            whereClause["id"] = {[Op.notIn]: JSON.parse(previousIds)}
        
        const sampleTermsRecords = await SampleTerm.findAll({
          include: {
            model: TermsDefinition
          },
          where: {
            ...whereClause
          },
          order: [
            ['id', 'DESC'],
          ],
          attributes: ["id","term", "definition_1", "definition_2"],
          raw: true,
          nest: true,
        })

        if(sampleTermsRecords.length === 0)
          return reply.status(400).send({ code: "MDT_DB_OUT_BOUNDARIES", errors: ["Has llegado el limite de muestra de terminos"]})

        sampleTermsRecords.map((termRecord)=>{
          const termDefinitions = [
            {answer: termRecord["definition_1"], id: -1, correct_answer: false}, 
            {answer: termRecord["definition_2"], id: -2, correct_answer: false}, 
            {answer: termRecord.terms_definition.definition, id: termRecord.terms_definition.id, correct_answer: true}
          ]
          const termDefinitionsShuffled = termDefinitions.sort((a, b) => 0.5 - Math.random());
          
          sampleTermsJson = {
            id: termRecord.id,
            term: termRecord.term,
            definitions: termDefinitionsShuffled
          }
        })
  
        return reply.send(sampleTermsJson)
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

module.exports = { fetchSampleTerms}