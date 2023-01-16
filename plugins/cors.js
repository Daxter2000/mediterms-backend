'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts, done) {
  fastify.register(require('@fastify/cors'), {
    origin: [
        'http://127.0.0.1:5000',
        'http://localhost:5000',
    ],
    credentials: true,
  })
  done()
})