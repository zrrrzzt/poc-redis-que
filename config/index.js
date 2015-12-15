'use strict'

var config = {
  'SERVER_PORT': process.env.SERVER_PORT || 3000,
  'REDIS_HOST': process.env.REDIS_HOST || '192.168.99.100',
  'REDIS_PORT': process.env.REDIS_PORT || 6379
}

module.exports = config
