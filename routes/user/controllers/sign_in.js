const {handleCommonErrors, } = require("#utils/controllers/index")

const signIn =  async function(request, reply, fastify){
    const User = fastify.db.user

    const {email, password} = request.body
    try {
        let userRecord = await User.findOne({
            where: {email: email},
            raw: true
        })
        userRecord ||= []

        if(userRecord.length === 0) return reply.status(400).send({code: "MDT_APP_USER_NOT_FOUND", errors: ["El usuario o la contraseña son incorrectas "]})

        //MATCH PASSWORD
        const matchPassword = await fastify.bcrypt.compare(password, userRecord.password)
        if (!matchPassword) reply.status(400).send({ errors: ['El usuario o la contraseña son incorrectas ' ], code: 'MDT_APP_PASSWORD_BAD_SUPPLIED' })

        // CREATING TOKEN
        const token = fastify.jwt.sign({ userId: userRecord.id }, { expiresIn: '1 year' }) 
       
        //SAVE THE TOKEN IN DATABASE
        await User.update({
            token: token,
            last_sign_in: Date.now()
        }, {
           where: { id: userRecord.id}
        })

        return reply.send( {token, user: {name: userRecord.name, email: userRecord.email}})
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

module.exports = {signIn}