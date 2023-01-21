
const {handleCommonErrors, } = require("#utils/controllers/index")
const {SES} = require("#services/ses/index")

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
        const tokenPassword = generatePasswordRandomly()
    
        User.update({
            tokenPassword: tokenPassword
        },{
            where: {email: email}
        })
       
        //ENVIAR CORREO ELECTRONICO
         const sesService =  new SES()
         const params = {
             addresses: ["omar.murillo@inteligene.com"],
             sourceAddress: "MediTerms <soporte@mediterms.app>",
             template: "MDT_Restore_Password_Template",
             templateData: `{ "email":"${email}", "link":"?tokenPassword=${tokenPassword}"}`
         }
        const response = await sesService.sendTemplatedEmail(params)
        return reply.send({success: true})
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

const changePassword = async function(request, reply, fastify){
    const User = fastify.db.user

    const {newPassword, password, confirmedPassword, tokenPassword} = request.body
    
    const {UserRecord} = await fastify.getUserId(fastify, request)
    const userId = UserRecord.id

    try {
         //MATCH PASSWORD
        if(newPassword != confirmedPassword)
            return reply.status(400).send({errors: ["La contraseña nueva no esta confirmada"], code: "MDT_APP_PASSWORD_NOT_CONFIRMED"})
       
        const matchPassword = await fastify.bcrypt.compare(password, UserRecord.password)
        if (!matchPassword) return reply.status(400).send({ errors: ['La contraseña proporcionada es incorrecta' ], code: 'MDT_APP_PASSWORD_BAD_SUPPLIED' })

        const matchBetweenPasswords =  await fastify.bcrypt.compare(newPassword, UserRecord.password)
        if (matchBetweenPasswords) return reply.status(400).send({ errors: ['La nueva contraseña es la misma que la proporcionada ' ], code: 'MDT_APP_PASSWORD_EQUAL' })

        await User.update({
            password: await fastify.bcrypt.hash(newPassword)
        }, {
            where: {id: userId}
        })
      
        return reply.send({user: {name: UserRecord.name, email: UserRecord.email}})
        // return reply.send( {token, user: {name: userRecord.name, email: userRecord.email}})
    } catch (e) {
        console.log(e)
        return reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

const saveNewPassword = async function(request, reply, fastify){
    const User = fastify.db.user

    const {newPassword, confirmedPassword, tokenPassword} = request.body
    
    try {
        //MATCH PASSWORD
        const userFound = await User.findOne({
            where: {tokenPassword: tokenPassword }
        })
        
        if(!userFound) return reply.status(400).send({ errors: ['EL usuario y/o el token no son validos' ], code: 'MDT_APP_PASSWORD_TOKEN_NOT_VALID' })
              
 
        if(newPassword != confirmedPassword){
            return reply.status(400).send({errors: ["La contraseña nueva no esta confirmada"], code: "MDT_APP_PASSWORD_NOT_CONFIRMED"})
        }
        
        const matchBetweenPasswords =  await fastify.bcrypt.compare(newPassword, userFound.password)
        if (matchBetweenPasswords) return reply.status(400).send({ errors: ['La nueva contraseña es la misma que la proporcionada ' ], code: 'MDT_APP_PASSWORD_EQUAL' })

        await User.update({
            password: await fastify.bcrypt.hash(newPassword),
            tokenPassword: null
        }, {
            where: {id: userFound.id}
        })
      
        return reply.send({user: {name: userFound.name, email: userFound.email}})
        // return reply.send( {token, user: {name: userRecord.name, email: userRecord.email}})
    } catch (e) {
        console.log(e)
        return reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

module.exports = {changePassword, resetPassword, saveNewPassword}