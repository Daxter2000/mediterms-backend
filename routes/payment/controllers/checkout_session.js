//PAYMENT CONTROLLER FOR METHODS 
const { stripe } = require("./stripe_conn")



const checkoutSession =  async function(request, reply, fastify){
    const { sessionId } = request.query;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    reply.send(session);
}

module.exports = { checkoutSession }

