'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts, done) {
    fastify.register(require('fastify-bcrypt'), {
        saltWorkFactor: 12
    })
    
    done()
})