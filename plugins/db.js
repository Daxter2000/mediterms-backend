'use strict'
const dbConfig = require('../models/index.js')
const fp = require('fastify-plugin')
// const config = require('../config/config.json')
// const env = process.env.NODE_ENV || 'development'

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts, done) {
  try {
    await dbConfig.sequelize.authenticate()
    console.log('Connection has been established successfully.')

    dbConfig.sequelize.sync().then(function () {
      console.log('Sequelize successfully initiated')
    })
    // await dbConfig.sequelize.query(
    //   `CREATE DATABASE IF NOT EXISTS ${config[env]['database']};`
    // )
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  fastify.decorate('db', dbConfig)
  done()
})
