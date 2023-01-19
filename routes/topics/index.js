
const {fetchAllTopics } = require("./controllers/index")
const { fetchAllTopicsSchema} = require("./schema/index")

module.exports = async function(fastify, opts, done ){
    const routes = [
        {
            method: 'GET',
            url: '/',
            schema: {...fetchAllTopicsSchema},
            handler: (request, reply) => {
                fetchAllTopics(request, reply, fastify)
            }
        },
    ]

    routes.map(route => fastify.route(route))
    done()
}
