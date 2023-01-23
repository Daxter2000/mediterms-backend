'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts, done) {
  fastify.register(require('@fastify/formbody'))
    done()
})