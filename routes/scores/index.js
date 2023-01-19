const { fetchTopicsScore } = require("./controllers/index")
const { fetchTopicsScoreSchema } = require("./schemas/index")

module.exports = async function(fastify, opts, done ){
    const routes = [
        {
            method: 'GET',
            url: '/',
            schema: {...fetchTopicsScoreSchema},
            preHandler: fastify.auth([fastify.verifyJWT]),
            handler: (request, reply) => {
                fetchTopicsScore(request, reply, fastify)
            }
        },
    ]

    routes.map(route => fastify.route(route))
    done()
}
