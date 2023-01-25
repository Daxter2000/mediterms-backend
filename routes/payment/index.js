
const { createPayment } = require("./controllers/index")

module.exports = async function (fastify, opts, done) {
    const routes = [
        {
            method: 'POST',
            url: '/create-payment-intent',
            // preHandler: () => {},
            handler: (request, reply) => {
                // console.log("Entro aqui")
                // reply.send("Terminado")
                createPayment(request, reply, fastify)
            }
        },
    ]

    routes.map(route => fastify.route(route))
    done()
}


