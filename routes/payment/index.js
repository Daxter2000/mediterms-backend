
const { createPayment, createPaymentWebhook, checkoutSession, createCheckoutSession} = require("./controllers/index")

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
        {
            method: 'POST',
            url: '/webhook',
            // preHandler: () => {},
            handler: (request, reply) => {
                console.log("Entro aqui")
                createPaymentWebhook(request, reply, fastify)

            }
        },

        {
            method: 'GET',
            url: '/checkout-session',
            // preHandler: () => {},
            handler: (request, reply) => {
                console.log("Entro aqui")
                checkoutSession(request, reply, fastify)

            }
        },

        {
            method: 'POST',
            url: '/create-checkout-session',
            // preHandler: () => {},
            handler: (request, reply) => {
                console.log("Entro aqui")
                createCheckoutSession(request, reply, fastify)

            }
        },

        


    ]

    routes.map(route => fastify.route(route))
    done()
}
