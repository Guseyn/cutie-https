'use strict'

const {
  IncomingMessage
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
  ClosedServer,
  HttpsRequest,
  EndedRequest,
  IncomingMessageWithAbortedEvent
} = require('./../../index')
const {
  FakeServer
} = require('./../../fake')

const port = 8015
const hostname = '127.0.0.1'
const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
}

class AbortEvent extends Event {
  constructor () {
    super()
  }

  body () {
    // handle
  }
}

class GeneratedRequestCallback extends AsyncObject {
  constructor (server) {
    super(server)
  }

  syncCall () {
    return (server) => {
      return (res) => {
        new Assertion(
          new Is(
            new IncomingMessageWithAbortedEvent(res, new AbortEvent()),
            IncomingMessage
          )
        ).after(
          new ClosedServer(server)
        ).call()
      }
    }
  }
}

FakeServer(port).as('server').after(
  new EndedRequest(
    new HttpsRequest(
      options, new GeneratedRequestCallback(
        as('server')
      )
    )
  )
).call()
