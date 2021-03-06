'use strict'

const {
  ServerResponse
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
  ResponseWithCloseEvent,
  HttpsRequest,
  EndedRequest,
  EndedResponse,
  ClosedServer
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8058
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

class CloseEvent extends Event {
  constructor () {
    super()
  }

  body () {
    // handle
  }
}

class RequestResponseEvent extends Event {
  constructor () {
    super()
  }

  body (req, res) {
    new Assertion(
      new Is(
        new EndedResponse(
          new ResponseWithCloseEvent(
            res, new CloseEvent()
          ), 'fake response'
        ), ServerResponse
      )
    ).call()
  }
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

FakeServer(
  port, hostname, new RequestResponseEvent()
).as('server').after(
  new EndedRequest(
    new HttpsRequest(
      options, new GeneratedRequestCallback(
        as('server')
      )
    )
  )
).call()
