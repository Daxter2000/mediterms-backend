'use strict'

const getUsers = async(request, reply, fastify) => {
  const user = await fastify.db.User.findAll({})
  return {user}
}

module.exports = async function (fastify, opts) {
  fastify.get('/', (request, reply) => getUsers(request, reply, fastify))
}
