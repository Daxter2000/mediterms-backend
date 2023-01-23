
const { signUp , signIn, changePassword, resetPassword, saveNewPassword, validateEmail} = require("./controllers/index")
const {signUpSchema, signInSchema, changePasswordSchema, resetPasswordSchema, saveNewPasswordSchema,validateEmailSchema}  = require("./schemas/index")

module.exports = async function(fastify, opts, done ){
    const routes = [
        {
            method: 'GET',
            url: '/email/validate',
            schema: {...validateEmailSchema},
            handler: (request, reply) => {
                validateEmail(request, reply, fastify)
            }
        },
        {
            method: 'POST',
            url: '/signup',
            schema: {...signUpSchema},
            handler: (request, reply) => {
                signUp(request, reply, fastify)
            }
        },
        {
            method: 'POST',
            url: '/login',
            schema: {...signInSchema},
            handler: (request, reply) => {
                signIn(request, reply, fastify)
            }
        },
        {
            method: 'POST',
            url: '/change_password',
            schema: {...changePasswordSchema},
            preHandler: fastify.auth([fastify.verifyJWT]),
            handler: (request, reply) => {
                changePassword(request, reply, fastify)
            }
        },
        {
            method: 'POST',
            url: '/save_password',
            schema: {...saveNewPasswordSchema},
            handler: (request, reply) => {
                saveNewPassword(request, reply, fastify)
            }
        },
        {
            method: 'POST',
            url: '/reset_password',
            schema: {...resetPasswordSchema},
            handler: (request, reply) => {
                resetPassword(request, reply, fastify)
            }
        },
    ]

    routes.map(route => fastify.route(route))
    done()
}
