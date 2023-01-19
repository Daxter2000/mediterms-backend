
const {handleCommonErrors, } = require("#utils/controllers/index")

const resetPassword =  async function(request, reply, fastify){
    // const User = fastify.db.user

    // const {email, password} = request.body
    try {
        return reply.send({})
        // return reply.send( {token, user: {name: userRecord.name, email: userRecord.email}})
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

const changePassword = async function(request, reply, fastify){
    const User = fastify.db.user

    const {newPassword, password} = request.body
    
    const {UserRecord} = await fastify.getUserId(fastify, request)
    const userId = UserRecord.id

    try {
         //MATCH PASSWORD

        const matchPassword = await fastify.bcrypt.compare(password, UserRecord.password)
        if (!matchPassword) return reply.status(400).send({ errors: ['La contraseña proporcionada es incorrecta' ], code: 'MDT_APP_PASSWORD_BAD_SUPPLIED' })

        const matchBetweenPasswords =  await fastify.bcrypt.compare(newPassword, UserRecord.password)
        if (matchBetweenPasswords) return reply.status(400).send({ errors: ['La nueva contraseña es la misma que la proporcionada ' ], code: 'MDT_APP_SAME_PASSWORD' })

        await User.update({
            password: await fastify.bcrypt.hash(newPassword)
        }, {
            where: {id: userId}
        })
        //ENVIAR CORREO ELECTRONICO
        return reply.send({user: {name: UserRecord.name, email: UserRecord.email}})
        // return reply.send( {token, user: {name: userRecord.name, email: userRecord.email}})
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

module.exports = {changePassword}