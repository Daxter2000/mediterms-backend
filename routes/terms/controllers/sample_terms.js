const { Op, ValidationError } = require('sequelize')

const getSampleTerms =  async function(request, reply, fastify){
    // FETCH THE MODEL ///////////////////////////////////////////////
    const SampleTerm = fastify.db.sample_term
    // FETCH PARAMS AND BODY DATA |||||||||||||||||||||||||||||||||
    // const {  }  = request.params
    // const {  } = request.body

    try {
        const sampleTerms = await SampleTerm.findAll({})
        console.log(sampleTerms)
        reply.send(sampleTerms)
    } catch (e) {
        const errors = []
        if (e instanceof ValidationError) {
          e.errors.map(error =>
            errors.push(`Captured validation error: ${error.message}`)
          )
        }
        reply.code(400).send({ has_error: true, errors })
    }
}

module.exports = { getSampleTerms}
