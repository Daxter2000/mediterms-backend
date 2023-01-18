
const { signUp } = require("./controllers/index")
const {signUpSchema} = require("./schemas/index")

module.exports = async function(fastify, opts, done ){
    const routes = [
        {
            method: 'POST',
            url: '/sign_up',
            schema: {...signUpSchema},
            handler: (request, reply) => {
                signUp(request, reply, fastify)
            }
        }
    ]

    routes.map(route => fastify.route(route))
    done()
}
