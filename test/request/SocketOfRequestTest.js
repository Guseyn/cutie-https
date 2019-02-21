'use strict'

const {
  Socket
} = require('net')
const {
  as, AsyncObject
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  SocketOfRequest,
  HttpsRequest,
  EndedRequest,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8048
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

class GeneratedRequestCallback extends AsyncObject {
  constructor (server) {
    super(server)
  }

  syncCall () {
    return (server) => {
      return (res) => {
        new ClosedServer(server).call()
      }
    }
  }
}

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new SocketOfRequest(
        new EndedRequest(
          new HttpsRequest(
            options, new GeneratedRequestCallback(
              as('server')
            )
          )
        )
      ), Socket
    )
  )
).call()
