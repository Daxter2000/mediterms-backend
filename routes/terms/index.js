
const {fetchSampleTerms, fetchIndividualTerm, addToTopicCounter } = require("./controllers/index")
const {fetchSampleTermsSchema, fetchIndividualTermSchema, addToTopicCounterSchema } = require("./schemas/index")

module.exports = async function(fastify, opts, done ){
    const routes = [
        {
            method: 'GET',
            url: '/samples',
            schema: {...fetchSampleTermsSchema},
            handler: (request, reply) => {
                fetchSampleTerms(request, reply, fastify)
            }
        },
        {
            method: 'GET',
            url: '/',
            schema: {...fetchIndividualTermSchema},
            handler: (request, reply) => {
                fetchIndividualTerm(request, reply, fastify)
            }
        },
        {
            method: 'POST',
            url: '/correct/:topicId',
            schema: {...addToTopicCounterSchema},
            handler: (request, reply) => {
                addToTopicCounter(request, reply, fastify)
            }
        }
    ]

    routes.map(route => fastify.route(route))
    done()
}
