const {handleCommonErrors, } = require("#utils/controllers/index")
const { exclude } = require("#utils/general/index")

const signUp =  async function(request, reply, fastify){
    const User = fastify.db.user
    const UserPaymentData = fastify.db.user_payment_data

    const {name, email, password, clientSecret} = request.body
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
        await User.update({
             token: token,
             last_sign_in: Date.now()
        }, {
           where: { id: newUserRecord.id}
        })
        console.log("builging payment data"
        )
        const paymentData = await UserPaymentData.build({
            userId: newUserRecord.id,
            stripeTransaction_id: clientSecret.clientSecret,
            expirationMonths: 12,
            subscription_date: Date.now()
        })
        console.log(paymentData)
        await paymentData.validate()
        await paymentData.save()
        
        // STRIPE PROCESO DE PAGAR
        return reply.send( {token, user: {name: newUserRecord.name, email: newUserRecord.email}})
    } catch (e) {
        reply.status(400).send({ ...handleCommonErrors(e) })
    }
}

module.exports = {signUp}