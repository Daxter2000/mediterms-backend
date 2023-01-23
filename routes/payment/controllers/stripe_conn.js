const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
    appInfo: { // For sample support and debugging, not required for production:
      name: "stripe-samples/<your-sample-name>",
      version: "0.0.1",
      url: "https://github.com/stripe-samples"
    }
  });

module.exports = { stripe }