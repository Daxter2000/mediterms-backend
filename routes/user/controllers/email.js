const {handleCommonErrors, } = require("#utils/controllers/index")

const validateEmail =  async function(request, reply, fastify){
    const User = fastify.db.user

    const {email} = request.query
    try {
        const userRecord = await User.findOne({
            where: {email : email}
        })
       
        if(userRecord) return reply.status(401).send({errors: ['El correo electronico ya ha sido registrado' ], code: 'MDT_APP_USER_ALREADY_REGISTERED' })
        return reply.send({valid: true})
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

module.exports = {validateEmail}

