module.exports = async function(fastify, opts, done ){
    const routes = [
        {
            method: 'GET',
            url: '/',
            // preHandler: () => {},
            handler: (request, reply) => {
                // console.log("Entro aqui")
                // reply.send("Terminado")
                reply.send({"publishableKey": process.env.STRIPE_PUBLISHABLE_KEY})
            }
        }
    ]

    routes.map(route => fastify.route(route))
    done()
}