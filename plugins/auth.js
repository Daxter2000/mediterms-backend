'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */


module.exports = fp(async function (fastify, opts, done) {
    const getUserFromToken = async(fastify, request) => {
      const auth = request.headers.authorization;
      const token = auth.split(' ')[1]
    
      const payload = fastify.jwt.decode(token) 
      const User = fastify.db.user
      const UserRecord = await User.findOne({where: {id: payload.userId}, raw: true})

      return {UserRecord, token}
    }

    const validateUserToken = async(fastify, request) => {
      const {token, UserRecord} = await getUserFromToken(fastify, request)
      if(token != UserRecord.token)
        return {errors: ["El usuario ha inciado sesion en otro dispositivo"], code: "MDT_APP_TOKEN_NOT_VALID"}
    }
  
    fastify.register(require('@fastify/jwt'), {
        secret: process.env.JWT_SECRET
      })
    
    fastify
        .decorate('verifyJWT', async function (request, reply, done) {
            await request.jwtVerify()
            const errors = await validateUserToken(fastify, request)

            if (errors != undefined)
              reply.status(400).send(errors)

        })
        .register(require('@fastify/auth'))
      
    fastify
      .decorate('getUserId', async function(fastify, request){
        return getUserFromToken(fastify, request)
      })

    done()
})