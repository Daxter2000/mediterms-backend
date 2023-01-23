//PAYMENT CONTROLLER FOR METHODS 
const { stripe } = require("./stripe_conn")
const { resolve } = require('path');
require('dotenv').config({ path: './.env' });



const createCheckoutSession = async function (request, reply, fastify) {
    const domainURL = process.env.DOMAIN;
  // Create new Checkout Session for the order
  // Other optional params include:
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{
      price: process.env.PRICE,
      quantity: 1,
    }],
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled.html`,
    // automatic_tax: { enabled: true }
  });

  return reply.redirect(303, session.url);
}
module.exports = { createCheckoutSession }

