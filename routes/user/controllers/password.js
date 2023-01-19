
const {handleCommonErrors, } = require("#utils/controllers/index")

const generatePasswordRandomly = () => {
    let password = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);
    return password.split("").sort(()=>Math.random() - 0.5).join("")
}

const resetPassword =  async function(request, reply, fastify){
    const User = fastify.db.user

    const {email} = request.body
    try {
        const userRecord = await User.findOne({
            where: {email : email}
        })
       
        if(!userRecord) return reply.status(401).send({errors: ['El correo electronico no existe' ], code: 'MDT_APP_USER_NOT_FOUND' })
        const newPassword = generatePasswordRandomly()
    
        User.update({
            password: await fastify.bcrypt.hash(newPassword)
        },{
            where: {email: email}
        })
       
        //ENVIAR CORREO ELECTRONICO
        return reply.send({})
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

module.exports = {changePassword, resetPassword}