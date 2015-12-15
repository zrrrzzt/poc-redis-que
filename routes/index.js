'use strict'

var handlers = require('../handlers')
var routes = [
  {
    method: 'POST',
    path: '/pub/{channel}',
    handler: handlers.handlePubMessages
  },
  {
    method: 'POST',
    path: '/list/{list}',
    handler: handlers.handlePushMessages
  }
]

module.exports = routes
