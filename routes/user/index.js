
const { signUp , signIn, changePassword} = require("./controllers/index")
const {signUpSchema, signInSchema} = require("./schemas/index")

module.exports = async function(fastify, opts, done ){
    const routes = [
        {
            method: 'POST',
            url: '/sign_up',
            schema: {...signUpSchema},
            handler: (request, reply) => {
                signUp(request, reply, fastify)
            }
        },
        {
            method: 'POST',
            url: '/sign_in',
            schema: {...signInSchema},
            handler: (request, reply) => {
                signIn(request, reply, fastify)
            }
        },
        {
            method: 'POST',
            url: '/change_password',
            // schema: {...signUpSchema},
            preHandler: fastify.auth([fastify.verifyJWT]),
            handler: (request, reply) => {
                changePassword(request, reply, fastify)
            }
        },
    ]

    routes.map(route => fastify.route(route))
    done()
}
