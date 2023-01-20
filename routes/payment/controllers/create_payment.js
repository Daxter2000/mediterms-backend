//PAYMENT CONTROLLER FOR METHODS 

const { stripe } = require("./stripe_conn")

const createPayment =  async function(request, reply, fastify){
    // FETCH THE MODEL ///////////////////////////////////////////////
    // FETCH PARAMS AND BODY DATA |||||||||||||||||||||||||||||||||
    // const {  }  = request.params
    // const {  } = request.body

    const { paymentMethodType } = request.body;
    try {
    
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 2000,
            currency: 'mxn',
            payment_method_types: [paymentMethodType] ,
            });
            reply.send({ clientSecret: paymentIntent.client_secret });

    } catch (e) {
        reply.code(400).send({ has_error: true, error: e.message })
    }
}

module.exports = { createPayment }


