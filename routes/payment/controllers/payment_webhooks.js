const endpointSecret = 'whsec_...';
const { stripe } = require("./stripe_conn")

  
const createPaymentWebhook =  async function(request, response, fastify){
  console.log(request.headers)
  const sig = request.headers['stripe-signature'];
  const body = request.body;

  let event = null;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    // invalid signature
    response.code(400).send({ error: err.message});
    return;
  }

  let intent = null;
  switch (event['type']) {
    case 'payment_intent.succeeded':
      intent = event.data.object;
      console.log("Succeeded:", intent.id);
      break;
    case 'payment_intent.payment_failed':
      intent = event.data.object;
      const message = intent.last_payment_error && intent.last_payment_error.message;
      console.log('Failed:', intent.id, message);
      break;
  }

  response.sendStatus(200);
};


module.exports = { createPaymentWebhook }


