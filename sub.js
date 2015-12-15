'use strict'

var redis = require('redis')
var client = redis.createClient(6379, '192.168.99.100')
var clientPop = redis.createClient(6379, '192.168.99.100')

function popMsg(channel) {
  clientPop.blpop(channel, 0, function (error, reply) {
    if (error) {
      console.error(error)
    }
    console.log(reply)
  })
}

client.on('message', function (channel, message) {
  var msg = JSON.parse(message)
  if (channel === 'list') {
    popMsg(msg.list)
  }
  console.log(channel + ": " + message)
})

client.subscribe('channel1')
client.subscribe('channel2')
client.subscribe('channel3')
client.subscribe('list')
