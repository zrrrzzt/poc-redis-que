'use strict'

var redis = require('redis')
var client = redis.createClient(6379, '192.168.99.100')

function handlePubMessages(request, reply) {
  var channel = request.params.channel
  var msg = JSON.stringify(request.payload)
  client.publish(channel, msg)
  reply(JSON.parse(msg))
}

function handlePushMessages(request, reply) {
  var list = request.params.list
  var msg = JSON.stringify(request.payload)
  client.rpush(list, msg)
  reply(JSON.parse(msg))
}

module.exports.handlePubMessages = handlePubMessages

module.exports.handlePushMessages = handlePushMessages
