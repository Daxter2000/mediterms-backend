
const {getSampleTerms} = require("./controllers/index")
const {sampleTermsJsonSchema} = require("./schemas/index")

module.exports = async function(fastify, opts, done ){
    const routes = [
        {
            method: 'GET',
            url: '/samples',
            schema: {...sampleTermsJsonSchema},
            // preHandler: () => {},
            handler: (request, reply) => {
                // console.log("Entro aqui")
                // reply.send("Terminado")
                getSampleTerms(request, reply, fastify)
            }
        }
    ]

    routes.map(route => fastify.route(route))
    done()
}
