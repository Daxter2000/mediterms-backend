'use strict'

const getUsers = async(request, reply, fastify) => {
  const user = await fastify.db.user.findAll({})
  return {user}
}

const getSample = async(request, reply, fastify) => {
  // const samples =  await fastify.db.sample_answer.findAll({})
  return {}
}

module.exports = async function (fastify, opts) {
  fastify.get('/', (request, reply) => getUsers(request, reply, fastify))

  fastify.get('/sample', (request, reply) => getSample(request, reply, fastify))
}
