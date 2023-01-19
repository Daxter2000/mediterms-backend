const {handleCommonErrors, } = require("#utils/controllers/index")
const { exclude } = require("#utils/general/index")

const signUp =  async function(request, reply, fastify){
    const User = fastify.db.user

    const {name, email, password} = request.body
    try {
        const newUserRecord = await User.build({
            name,
            email,
            password: await fastify.bcrypt.hash(password)
        })
        
        await newUserRecord.validate()
        await newUserRecord.save()

        const token = fastify.jwt.sign({ userId: newUserRecord.id }, { expiresIn: '1 year' }) 
        // ASSIGN TOKEN
        // await User.update({
        //      token: token,
        //      last_sign_in: Date.now()
        // }, {
        //    where: { id: newUserRecord.id}
        // })
        // STRIPE PROCESO DE PAGAR
        return reply.send( {token, user: {name: newUserRecord.name, email: newUserRecord.email}})
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

module.exports = {signUp}