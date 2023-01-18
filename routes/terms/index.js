
const {getSampleTerms, } = require("./controllers/index")
const {getSampleTermsSchema, } = require("./schemas/index")

module.exports = async function(fastify, opts, done ){
    const routes = [
        {
            method: 'GET',
            url: '/samples',
            schema: {...getSampleTermsSchema},
            handler: (request, reply) => {
                getSampleTerms(request, reply, fastify)
            }
        }
    ]

    routes.map(route => fastify.route(route))
    done()
}
