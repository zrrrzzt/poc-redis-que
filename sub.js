'use strict'

var redis = require('redis')
var client = redis.createClient(6379, '192.168.99.100')

client.on('message', function (channel, message) {
  console.log(channel + ": " + message)
})

client.subscribe('channel1')
client.subscribe('channel2')
client.subscribe('channel3')
