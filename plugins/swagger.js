const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'MediTerms Documentation',
        description: 'MediTerms backend',
        version: '0.1.0',
      },
      securityDefinitions: {
        token: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description: "Enter the token with the `Bearer: ` prefix, e.g. `Bearer abcde12345"
        }
      },
      tags: [ 
        {name: "topics", description: "Peticiones de topicos"}, 
        {name: "terms", description: "Peticiones de terminos"}, 
        {name: "user", description: "Peticiones de usuarios"}
      ],
      host: '127.0.0.1:3000',
      basePath: '',
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next()
      },
      preHandler: function (request, reply, next) {
        next()
      }
    },
    staticCSP: true,
    transformStaticCSP: header => header,
    hideUntagged: true,
    exposeRoute: true
  })
  fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs'
  })

})
