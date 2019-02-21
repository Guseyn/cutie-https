'use strict'

const {
  ClientRequest
} = require('http')
const {
  as, AsyncObject, Event
} = require('@cuties/cutie')
const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  RequestWithSocketEvent,
  HttpsRequest,
  EndedRequest,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8041
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

class SocketEvent extends Event {
  constructor () {
    super()
  }

  body () {
    // on abort
  }
}

FakeServer(port).as('server').after(
  new Assertion(
    new Is(
      new RequestWithSocketEvent(
        new EndedRequest(
          new HttpsRequest(
            options, new GeneratedRequestCallback(
              as('server')
            )
          )
        ), new SocketEvent()
      ), ClientRequest
    )
  )
).call()
